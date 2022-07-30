import React from 'react';
import "../styles/Home.css";

export default function Home() {
    return (
        <div className="wrapper-home">
            <div className="home-body">
                <img className='home-img' 
                     src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Alfombra_Bienvenida_Wikipedia.svg"
                     alt="bienvenido"
                     width="800px"/>
            </div>
            <div className="home-title">
                <h1>Bienvenidos a mi Blog</h1>
            </div>
        </div>
    )
}