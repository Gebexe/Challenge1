import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles/App.css';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import AllPost from './components/AllPost';
import NotFound from './components/NotFound';

function App() {
  return (

    //TODO (opcional): trabajar con contexto y redirigir en el caso de que el usuario no esté logueado. Lo que podrían hacer es comprobar el logueo del usuario en los componentes CreatePost y AllPost y sacar las redirecciones de este componente.
    <Router>
      <div className='wrapper'>
        <Navbar/>
        <Routes>
          <Route path="/CreatePost" element={<Navigate to="/Login" replace/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/CreatePost" element={<CreatePost/>}/>
          <Route exact path="/AllPost" element={<AllPost/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
