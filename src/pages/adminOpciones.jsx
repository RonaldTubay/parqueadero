import React from 'react';
import '../css/adminOpciones.css'; // Asegúrate de tener la ruta correcta al archivo CSS

export const Opciones = ({onFormSwitch}) => {

  const handlePrincipal = () => {
    onFormSwitch('principal');
  };
  
  const handleGestionLugares = () => {
    onFormSwitch('registroLugares');
  };
  
  const handleGestionReservas = () => {
    onFormSwitch('registroReservas');
  };

  return (
      <body>
        <div className="banner">
          <div className="banner-contenedor">
            <div className="banner-contenido banner1">
              <h1 className="promocion-titulo">Gestionar lugares disponibles</h1>
              <p className="promocion-texto">Crea y elimina datos sobre los lugares disponibles del parqueadero</p>
              <button
                    type="button"
                    onClick={handleGestionLugares}
                    >
                    Ir
              </button>
            </div>
            <div className="banner-contenido banner2">
              <h1 className="promocion-titulo">Gestionar reservas de usuarios</h1>
              <p className="promocion-texto">Elimina usuarios con reserva caducada o sin usar</p>
              <button
                    type="button"
                    onClick={handleGestionReservas}
                    >
                    Ir
              </button>
            </div>
            <button
                    type="button"
                    onClick={handlePrincipal}
                    >
                    Cerrar Sesión
              </button>
          </div>
        </div>
      </body>
  );
}
