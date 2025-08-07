import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './pages/Principal';
import Perfil from './pages/Perfil';
import Actividades from './pages/Actividades';

function App() {
  return (
    <>
    <div className="fondo-flare one"></div>
  <div className="fondo-flare two"></div>
  <div className="fondo-flare three"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/actividades" element={<Actividades />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
