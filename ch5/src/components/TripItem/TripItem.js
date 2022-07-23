import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
       border: "lightgrey solid 1px",
       margin: 50,
       padding: 125,
       position: "relative",
       textAlign: "center",
       textTransform: "uppercase",
       width: 200,
    },
    add: {
        border: "none",
        background: "none",
        cursor: "pointer",
    },
    image: {
        width: 200,
    },
});

export default function TripItem({ image, name, description, precio}) {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <h3>{name}</h3>
               <img className={classes.image} src={image} alt={name} aria-label={name}/>
                <h4>{description}</h4>
                <h5>${precio}</h5>
      
        </div>
    
    )
}

TripItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}