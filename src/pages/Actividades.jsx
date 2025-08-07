import React from 'react';
import AppBar from '../componentes/Appbar';
import './principal.css';

const actividades = [
  {
    tema: 'Fracciones',
    momentos: [
      {
        nombre: 'Momento Inicial',
        texto: 'Juego interactivo tipo ruleta (Wordwall)',
        link: 'https://wordwall.net/es/resource/95569842',
      },
      {
        nombre: 'Momento Conceptual',
        texto: 'Mapa conceptual visual sobre tipos de fracciones',
        link: 'https://pin.it/23g5zOuEo',
      },
      {
        nombre: 'Momento de Apropiación',
        texto: 'Aventura gamificada en Genially: "Viaje lógico intergaláctico"',
        link: 'https://view.genially.com/6892a71f3b0ae91fb11f80cb/interactive-content-viaje-logico-intergalactico-desafiando-la-mente-mas-alla-de-las-estr',
      },
      {
        nombre: 'Momento de Evaluación',
        texto: 'Quiz interactivo en Kahoot',
        link: 'https://create.kahoot.it/share/fracciones-y-mcm/009706b8-3ae6-44f2-96ed-b311cdb2923e',
      },
    ],
  },
  {
    tema: 'Conjuntos (con enfoque inclusivo)',
    momentos: [
      {
        nombre: 'Momento Inicial',
        texto: 'Actividad en Educaplay: relacionar conjuntos con imágenes',
        link: 'https://www.educaplay.com/learning-resources/24859734-clasificamos_los_conjuntos.html',
      },
      {
        nombre: 'Momento Conceptual',
        texto: 'Infografía visual sobre conjuntos y clasificación',
        link: 'https://pin.it/nsdjTzX1U',
      },
      {
        nombre: 'Momento de Apropiación',
        texto: 'Liveworksheets: completar y clasificar conjuntos',
        link: 'https://wordwall.net/es/resource/95661931',
      },
      {
        nombre: 'Momento de Evaluación',
        texto: 'Kahoot con preguntas visuales y adaptadas',
        link: 'https://create.kahoot.it/share/pertenece-o-no-pertenece/7c671b93-203c-4d05-b0d0-db2920ef7537',
      },
    ],
  },
];

const aprendizaje = `Esta experiencia formativa ha permitido enriquecer mi práctica docente mediante el diseño de secuencias didácticas mediadas por TIC, con enfoque inclusivo. Aprendí a planificar actividades digitales centradas en el estudiante, integrando herramientas interactivas que favorecen la comprensión y la participación de todos los alumnos, sin importar sus habilidades o barreras. Esta formación me motivó a seguir transformando mi aula en un espacio más flexible, creativo y equitativo.`;

const Actividades = () => {
  const scrollCarousel = (direction) => {
    const container = document.querySelector('.scroll-container');
    const cardWidth = container.offsetWidth * 0.9 + 32; // 90% + gap
    container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <div>
      <AppBar />
      <div className="main-content">
        <h1 className="actividades-titulo">Planeación de actividades con recursos digitales</h1>

        {/* Botones de navegación */}
        <div className="carousel-buttons">
          <button className="scroll-btn" onClick={() => scrollCarousel(-1)}>‹</button>
          <button className="scroll-btn" onClick={() => scrollCarousel(1)}>›</button>
        </div>

        {/* Carrusel de tarjetas */}
        <div className="scroll-container">
          <div className="activities-slider">
            {actividades.map((tema, idx) => (
              <div className="actividad-card animated-card" key={idx}>
                <h2>{tema.tema}</h2>
                <ul>
                  {tema.momentos.map((momento, i) => (
                    <li key={i} className="actividad-item">
                      <strong>{momento.nombre}:</strong> {momento.texto}
                      <a
                        href={momento.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="actividad-link"
                        aria-label="Ir al recurso"
                      >
                        <span className="flecha-link">➔</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Tarjeta de aprendizaje logrado */}
            <div className="actividad-card aprendizaje animated-card">
              <h3>Aprendizaje logrado</h3>
              <p>{aprendizaje}</p>
              <p>
                Referencias:<br />
                - Cabero, J., & Llorente, M. C. (2006). La integración de las TIC en los centros educativos. Revista Electrónica de Tecnología Educativa, (20).<br />
                - Area, M. (2010). Las competencias digitales en el área de Matemáticas. Revista de Educación, 353, 77–97.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actividades;
