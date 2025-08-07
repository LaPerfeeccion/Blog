import React from 'react';
import AppBar from '../componentes/Appbar';
import './principal.css';
import fpImg from '../assets/fp.png';

const perfilData = {
  nombre: "Daniel De La Hoz Badillo",
  cc: "7249095",
  correo: "daniel.delahozb2024@uted.us",
  area: "Matemáticas",
  institucion: "IE Técnico Comercial de Palmar de Varela",
  grado: "6",
  ciudad: "Palmar de Varela",
  foto: fpImg
};

const perfilAcademico = [
  {
    icon: "🎓",
    texto: "Ingeniero Mecánico con experiencia en docencia en básica secundaria."
  },
  {
    icon: "📐",
    texto: "Docente de Matemáticas y Geometría en grado 6°."
  },
  {
    icon: "💻",
    texto: "Estudiante de Maestría en Enseñanza y Aprendizaje en Entornos Virtuales."
  },
  {
    icon: "🌐",
    texto: "Comprometido con estrategias pedagógicas inclusivas y uso de TIC."
  }
];

const Perfil = () => {
  return (
    <div>
      <AppBar />
      <div className="main-content perfil-row">
        <div className="perfil-card animated-card">
          <img className="perfil-foto animated-foto" src={perfilData.foto} alt="Foto de perfil" />
          <div className="perfil-info">
            <h2>{perfilData.nombre}</h2>
            <p><strong>Cédula:</strong> {perfilData.cc}</p>
            <p><strong>Correo:</strong> {perfilData.correo}</p>
            <p><strong>Área:</strong> {perfilData.area}</p>
            <p><strong>Institución:</strong> {perfilData.institucion}</p>
            <p><strong>Grado:</strong> {perfilData.grado}</p>
            <p><strong>Ciudad:</strong> {perfilData.ciudad}</p>
          </div>
        </div>
        <div className="perfil-academico mejorado animated-card">
          <h3>Perfil académico y laboral</h3>
          <ul>
            {perfilAcademico.map((item, idx) => (
              <li key={idx}>
                <span className="perfil-icon">{item.icon}</span>
                <span className="perfil-texto">{item.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Perfil;