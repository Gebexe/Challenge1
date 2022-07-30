import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <h2>Fabuloso Blog</h2>
            <div>
                <ul>
                    <li><Link to="/Login">Iniciar Sesión</Link></li>
                    <li><Link to="/AllPost">Historias</Link></li>
                </ul> 
            </div>     
        </div>
    )
} 