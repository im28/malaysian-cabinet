import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { messageService } from './_services'
import { candidates } from './data'
import { Button } from '@material-ui/core';
import { toBlob } from 'html-to-image';
import { saveAs } from 'file-saver';



const useStyles = makeStyles({
    root: {
        width: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const SelectionCard = () => {
    const classes = useStyles();
    const [role, setRole] = useState("None");
    const [selectedCandidate, setSelectedCandidate] = useState("");

    useEffect(() => {
        // subscribe to home component messages
        const subscription = messageService.onMessage().subscribe(message => {
            if (message) {
                // add message to local state if not empty
                setRole(message);
                setSelectedCandidate("")
            } else {
                setRole("");
            }
        });
        // return unsubscribe method to execute when component unmounts
        return () => subscription.unsubscribe();

    }, []);


    return (

        <Card className={classes.root} style={{
            position: 'absolute',
            top: "8px",
            left: "16px",
            zIndex: "10"

        }} >
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Select Role
                </Typography>
                <Typography variant="h5" component="h2">
                    {role}
                </Typography>
            </CardContent>

            <CardActions>
                <Autocomplete
                    id="combo-box-demo"
                    onChange={(e, v) => {
                        console.log(v);
                        if (role !== "None" && v !== null) {
                            messageService.RelayMessage(
                                {
                                    name: v.name,
                                    id: role,
                                    imgID: v.imageURL
                                }
                            )
                        }
                    }}
                    fullWidth={true}
                    inputValue={selectedCandidate}
                    options={candidates}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Candidate" variant="outlined" />}
                />

            </CardActions>
            <CardContent>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        toBlob(document.getElementById('TREE'))
                            .then(function (blob) {
                                saveAs(blob, 'my-node.png');
                            });

                    }}
                >
                    Save Image
                </Button>
            </CardContent>
        </Card>
    );
}
