import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { messageService } from './_services'


const useStyles = makeStyles({
    root: {
        maxWidth: 205,
        minWidth: 205,
        //minHeight: 180
    },
    media: {
        height: 80,
    },
});



export const MediaCard = ({ noImage, role }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("whiteBG.png");
    const classes = useStyles();
    useEffect(() => {
        // subscribe to home component messages
        const subscription = messageService.onMessageReceive(role).subscribe(message => {
            if (message) {
                // add message to local state if not empty
                setName(message.name);
                setImage(message.imgID);
            } else {
                setName("");
            }
        });

        // return unsubscribe method to execute when component unmounts
        return () => subscription.unsubscribe();
    }, []);
    let showImage = () => {
        if (noImage) {
            return;
        } else {
            // return <CardMedia
            //     className={classes.media}
            //     image={"./Candidates/"+ image}
            //     title="image"
            // />
            return <div>
                <img src={"./Candidates/" + image} style={{
                    objectFit: "cover", /* Do not scale the image */
                    objectPosition: "center", /* Center the image within the element */
                    height: "100px",
                    width: "100%",
                }} alt={image} />
            </div>
        }
    }
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Card className={classes.root}>

                {showImage()}
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="p">
                        {role}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}
