import React from 'react';
import TripItem from '../TripItem/TripItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        padding: [10, 50],
        justifyContent: "center",
    },
});

export const countries = [
    {
        image: "img01.jpg", 
        name: "new york",
        description: "la capital de estados unidos un lugar perfecto para hacer todo posible",
        precio: 600

    },
    {
        image: "img02.jpg", 
        name: "londres",
        description: "la capital de inglaterra, un lugar emocionante para unas vacaciones en el extranjero",
        precio: 500
    
    },
    {
        image: "img03.jpg", 
        name: "paris",
        description: "la capital de francia, el mejor lugar para relajarse y aprender sobre la historia del arte",
        precio: 700
       
    }
];

export default function TripBuilder() {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            {countries.map((countries) => (
                <TripItem
                    key={countries.name}
                    image={__dirname + "images/" + countries.image}
                    name={countries.name}
                    description={countries.description}
                    precio = {countries.precio}/>
            ))}
        </div>
    )
}