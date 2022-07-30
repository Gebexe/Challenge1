import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../services/UserService';
import '../styles/Login.css';


export default function Login() {
    // TODO
    // Agregar Hooks
   let navigate = useNavigate();
    const register= ()=> {
        navigate("/Register")

    }
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
         getUser(email,password);

        // Si el usuario existe, redirijo a AllPost
        // Si el usuairo no existe, doy un mensaje de error y me quedo en el Login 
    }

    return (
        <div>
            <h3>Bienvenidos de nuevo. Por favor inicie sesión</h3>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="email">
                        <input type="email" placeholder="Escriba su dirección de correo" onChange={event => setEmail(event.target.value)} value={email}/>
                    </label><br/>
                    <label htmlFor="password">
                        <input type="password" placeholder="Escriba su contraseña" onChange={event => setPassword(event.target.value)} value={password}/>
                    </label>
                </fieldset>
                <button type="submit" >Ingresar</button> <button onClick={register}>Registrarse</button>
            </form>       
        </div>
    )
}