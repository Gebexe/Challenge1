import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from '../User/User';
import logo from './logo.png';

const useStyles = createUseStyles({
    wrapper: {
        borderBottom: "black solid 1px",
        padding: [10],
        textAlign: "right",
        fontSize: "25px"
    },
    logo: { 
        padding: [10,20],

        textAlign:"left"
        
 }
});

export default function Header() {
    const user = useContext(UserContext);
    const classes = useStyles();
    return(

        <div>
        <h2  padding=  {10} textAlign = "left">TURISMO</h2> <img src={logo} alt="viajes" className={classes.logo} height= "100" width= "100"  object-fit= "contain"></img >
        <h1 className={classes.wrapper}  > Bienvenido {user.name}</h1>
        <h2>{user.email}</h2>
        </div>
    )
}