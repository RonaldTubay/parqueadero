import React from 'react';
import '../css/principal.css'; // Asegúrate de importar tu archivo CSS correctamente

export const Principal = ({ onFormSwitch }) => {

  const handlePrincipal = () => {
    onFormSwitch('principal');
  };
  
  const handleHorario = () => {
    onFormSwitch('horario');
  };
  
  const handleSesionUsuario = () => {
    onFormSwitch('login');
  };
  
  const handleRegistroUsuario = () => {
    onFormSwitch('registro');
  };

  return (
      <body className="pestaña">
        <header className="arriba">
          <div className="barra">
            <nav className="logo">
              <button
                    type="button"
                    onClick={handlePrincipal}
                    >
                    Parqueadero Uleam
              </button>
            </nav>
            <nav className="navegacion">
            <button
                    type="button"
                    onClick={handleHorario}
                    >
                    Horarios disponibles
              </button>
            </nav>
            <nav className="iniciarSesion">
            <button
                    type="button"
                    onClick={handleSesionUsuario}
                    >
                    Iniciar Sesión
              </button>
            </nav>
          </div>
          <div className="banner">
            <div className="banner-contenedor">
              <div className="banner-contenido banner1">
                <h1 className="promocion-titulo">¿Aún no tienes cuenta ?</h1>
                <p className="promocion-texto">Registrate para reservar un espacio en el parqueadero.</p>
                <button
                    type="button"
                    onClick={handleRegistroUsuario}
                    >
                    Ir
              </button>
              </div>
            </div>
          </div>
        </header>
        <main className="medio">
          <section className="seccion1">
            <h2 className="titulo">¿Deseas saber donde estamos ubicados?</h2>
            <p className="descripcion">Via San Mateo y Circunvalación, Manta, Manabí</p>
            <a href="https://www.bing.com/maps?&cp=-0.957182~-80.759447&lvl=16&pi=0&osid=f3d77c66-9723-40bd-83ec-6a1ec16c2ae7&imgid=320d2292-0681-45cb-9d0a-57f2b7f93fe5&v=2&sV=2&form=S00027" className="boton">ir</a>
          </section>
          <section className="seccion2">
            <article className="articulo">
              <h2 className="titulo">Requisitos para realizar reserva:</h2>
              <p className="descripcion">Pertenecer a la institución como docente o alumno.</p>
            </article>
            <article className="articulo">
              <h2 className="titulo">Horarios de atención:</h2>
              <p className="descripcion">Lunes a viernes: 06:00 am - 09:00 pm</p>
            </article>
          </section>
        </main>
        <footer className="abajo">
          <div className="redes-sociales">
            <a href="https://www.facebook.com" className="social-icon">
              {/* <i className="fab fa-facebook"></i> */}
            </a>
            <a href="https://twitter.com" className="social-icon">
              {/* <i className="fab fa-twitter"></i> */}
            </a>
          </div>
        </footer>
      </body>
  );
};


