import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { messageService } from './_services'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { candidates } from './data'

const useStyles = makeStyles({
    root: {
        width: "100%",
        height: 210
    },
    media: {
        //height: 80,
    },
});



export const MediaCard = ({ noImage, role }) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("whiteBG.png");
    const classes = useStyles();
    const [selectedCandidate, setSelectedCandidate] = useState("");
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
                    objectFit: "contain", /* Do not scale the image */
                    objectPosition: "center", /* Center the image within the element */
                    height: "6rem",
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
                <Autocomplete
                    id="combo-box-demo"
                    size={'small'}
                    onChange={(e, v) => {
                        if (v !== null) {
                            setName(v.name);
                            setImage(v.imageURL);
                        }


                    }}
                    fullWidth={true}
                    //inputValue={selectedCandidate}
                    options={candidates}
                    getOptionLabel={(option) => option.name}

                    style={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Candidate" variant="outlined" />}
                />
                <Typography variant="caption" color="textSecondary" component="p">
                    {role}
                </Typography>
                <CardContent style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    flexDirection: "column",

                }}>
                    {/* <Typography gutterBottom variant="h6" component="h4">
                        {name}
                    </Typography> */}


                </CardContent>



            </Card>
        </div>
    );
}
