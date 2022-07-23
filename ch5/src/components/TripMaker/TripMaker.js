import React, { useReducer, createContext } from 'react';
import TripSummary from '../TripSummary/TripSummary';
import TripBuilder from '../TripBuilder/TripBuilder';
import { createUseStyles } from 'react-jss';
import {countries} from '../TripBuilder/TripBuilder'


const  paises = countries.map(precio => precio)

function reducer(state,action) {
    
    switch (action.type){
         case "compra":
            
    
            return {carro: state.carro + paises[2].precio}
        case "reserva":
            return {carro: state.carro}
        case "promo":

            let carrodef= state.carro + paises[0].precio
             return {carro: carrodef}
        case "cancelar":
           
            if (state.carro - paises[2].precio < 0){
                return { carro: state.carro}
            }
            else {return {carro: state.carro - paises[2].precio}}   
        default:
            return {carro: state.carro}
        
            }
   
}

const useStyles = createUseStyles({
    wrapper: {
       textAlign: "center",
       padding: "0 20px 0 20px",
       display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontSize: 25,
        maxHeight: 25,
        position: "relative",
        float: "center"
        
        
    },
    cancelar: {
        textAlign: "right",
        float: "right",
        padding: "0 20px 0 20px",
        fontSize: 20,
        textTransform: "uppercase"

    }
});

export const TripContext = createContext();
var reservas = 0
export default function TripMaker() {
    const [state, dispatch] = useReducer(reducer, {carro:0})

    function compra () {
        dispatch({type: "compra"})
    }
    function reserva (){
        reservas= reservas + 1
        console.log ("correo enviado por la reserva en londres a $500")
        dispatch({type: "reserva"})
    }
        
    function promo (){
        
        dispatch({type: "promo"})
    }
    function cancelar() {
        if (reservas > 0) {
        reservas = reservas - 1
    return console.log ("cancelación de reserva")}
       if (reservas === 0){

        dispatch({type: "cancelar"})}
    }


    const classes = useStyles();
    return(
        <TripContext.Provider value={state}
        >
            <button className={classes.cancelar} onClick={cancelar}
            >cancelar</button>
            <h1 className={classes.wrapper}> Elija su destino 
            </h1>
            <TripBuilder/>
            <div className={classes.wrapper}>
            <button className='promo' onClick={promo}>promo</button>
            <button className='reserva' onClick={reserva}>reserva</button>
            <button className='compra' onClick={compra}>compra</button></div>
  <TripSummary/>
        </TripContext.Provider>
    )
}
