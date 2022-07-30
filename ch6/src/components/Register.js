import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../services/UserService';
import '../styles/Register.css';


export default function Register() {
    let navigate = useNavigate();
    // Creamos aquí nuestros Hooks (useState)
    const[nameRegister, setnameRegister] = useState("");
    const[emailRegister, setEmailRegister] = useState("");
    const[passwordRegister, setPasswordRegister] = useState("");
    


    // TODO:
    const handleSubmit = (event) => {
        event.preventDefault();
        setUser(nameRegister,emailRegister,passwordRegister).then(()=> navigate("/Login"));//verificar que me trae
        // puedo redirigirlo a login o (en este caso) podría directamente, una vez que se verifica que se registra el usuario, a AllPost ("poniendo en el contexto el nombre del usuario")
    }

    return (
        <div>
            <h2>Bienvenidos. Por favor regístrese aquí.</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">
                        <input type="text" placeholder="Escriba su nombre" onChange={event => setnameRegister(event.target.value)} value={nameRegister}/>
                    </label> <br/>
                    <label htmlFor="email">
                        <input type="email" placeholder="Escriba su dirección de correo" onChange={event => setEmailRegister(event.target.value)} value={emailRegister}/>
                    </label> <br/>
                    <label htmlFor="password">
                        <input type="password" placeholder="Escriba su contraseña" onChange={event => setPasswordRegister(event.target.value)} value={passwordRegister}/>
                    </label>
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}