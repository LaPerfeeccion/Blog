import React from 'react';
import { AppBar } from '../componentes/appbar';
import './principal.css';

const SkeletonLoader = () => (
  <div className="skeleton-loader">
    <div className="skeleton-bar" />
    <div className="skeleton-bar short" />
    <div className="skeleton-bar" />
  </div>
);


const Principal = () => {

  return (
    <>
      <AppBar />
      <div className="main-content">
        <div className="card-title">
          <h1>Fraccionando el mundo: aprende, juega y comparte</h1>
        </div>

        <div className="row-blocks">
          <div className="pt2">
            <div className="card2">
              <h2>Objetivo de Aprendizaje</h2>
            </div>
            <div className="card3">
              <p>
                Identificar, comparar y representar fracciones en diferentes contextos, desarrollando habilidades de
                análisis, interpretación y solución de problemas cotidianos, mediante el uso de herramientas TIC.
              </p>
            </div>
          </div>

          <div className="pt2">
            <div className="card2">
              <h2>Justificación</h2>
            </div>
            <div className="card3">
              <p>
                La enseñanza de las fracciones representa un reto en la educación matemática básica, por lo que es clave
                apoyarse en metodologías activas y recursos digitales. Las TIC permiten visualizar conceptos abstractos
                y fortalecer la motivación del estudiante. Según Cabero y Llorente (2006), “la integración de las TIC en
                el aula mejora el aprendizaje al permitir interacciones significativas con el contenido”. Además, como
                señala Área (2010), “el uso pedagógico de las TIC debe centrarse en el desarrollo de competencias y no
                solo en el uso instrumental de la tecnología”. Por tanto, esta propuesta busca fortalecer la comprensión
                de las fracciones en los estudiantes de grado 6°, combinando la didáctica tradicional con recursos
                digitales interactivos que favorezcan el aprendizaje activo y colaborativo.
              </p>
            </div>
          </div>
        </div>

 
      </div>
    </>
  );
};

export default Principal;
