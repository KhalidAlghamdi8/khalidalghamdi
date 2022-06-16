import React, {useState} from 'react';
import { Card, makeStyles } from '@material-ui/core';
import ProjList from "../../ProjectList/projList";




export default function CarouselSlide(props) {
    const { backgroundColor, title } = props.content;
    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 5,
            padding: '75px 50px',
            margin: '90px 25px',
            width: "auto",
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        }
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>

        </Card>


    );
}