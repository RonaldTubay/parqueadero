import React, { useState, useEffect } from 'react';
import '../css/horario.css'
export const Horario = ({onFormSwitch}) => {

    const handlePrincipal = () => {
        onFormSwitch('principal');
      };

    const [lugaresRegistrados, setLugaresRegistrados] = useState([]);

    useEffect(() => {
        function actualizarListaLugares() {
            const storedLugares = JSON.parse(localStorage.getItem('lugaresRegistrados')) || [];
            setLugaresRegistrados(storedLugares);
        }

        actualizarListaLugares();

        
    }, []);


    return (
            <body>
                <h1>Lugares registrados:</h1>
                <ul id="listaLugares">
                    {lugaresRegistrados.map((lugar, index) => (
                        <li key={index}>
                            <strong>ID del Lugar:</strong> {lugar.idLugar}<br />
                            <strong>Disponibilidad:</strong> {lugar.disponibilidad}<br />
                            <strong>Fecha:</strong> {lugar.fecha}<br />
                            <strong>Hora:</strong> {lugar.hora}<br />
                            {/* <button onClick={() => eliminarLugar(index)}>Eliminar</button> */}
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    onClick={handlePrincipal}
                    >
                    Regresar al inicio
              </button>
            </body>
    );
}


