import React,{useContext} from 'react';
import { createUseStyles } from 'react-jss';
import { TripContext } from '../TripMaker/TripMaker';


const useStyles = createUseStyles({
    wrapper: {
        borderTop: "black solid 1px",
        padding: "0 20px 0 20px",
        display: "flex",
    },
    list: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontSize: 20,
        maxHeight: 40,
        "& li": {
            width: 130,
            padding: 3,
        }
    }
});

export default function IcecreamSummary() {
    const classes = useStyles();
    const carro  = useContext(TripContext);
    return(
        <div className={classes.wrapper}>
            <h2>Carro:{carro.carro} </h2>
        </div>
    )
}