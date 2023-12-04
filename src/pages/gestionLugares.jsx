import React, { useState, useEffect } from 'react';
import '../css/gestionLugares.css'

export const RegistroLugares = ({onFormSwitch}) => {

    const handleOpciones = () => {
        onFormSwitch('adminOpciones');
      };

    const [idLugar, setIdLugar] = useState('');
    const [disponibilidad, setDisponibilidad] = useState('Disponible');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [lugaresRegistrados, setLugaresRegistrados] = useState([]);

    useEffect(() => {
        const storedLugares = JSON.parse(localStorage.getItem('lugaresRegistrados')) || [];
        setLugaresRegistrados(storedLugares);
    }, []);

    const registrarLugar = () => {
        const errorMessages = [];

        if (!/^\d+$/.test(idLugar)) {
            errorMessages.push("ID del lugar debe contener solo números.");
        }

        if (disponibilidad !== "Disponible" && disponibilidad !== "Ocupado") {
            errorMessages.push("Disponibilidad debe ser 'Disponible' o 'Ocupado'.");
        }

        if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
            errorMessages.push("Fecha debe tener el formato YYYY-MM-DD.");
        }

        if (!/^\d{2}:\d{2}$/.test(hora)) {
            errorMessages.push("Hora debe tener el formato HH:MM.");
        }

        if (errorMessages.length > 0) {
            alert("Por favor, corrija los siguientes errores:\n" + errorMessages.join("\n"));
            return;
        }

        const nuevoLugar = {
            idLugar,
            disponibilidad,
            fecha,
            hora
        };

        const updatedLugares = [...lugaresRegistrados, nuevoLugar];
        setLugaresRegistrados(updatedLugares);
        localStorage.setItem('lugaresRegistrados', JSON.stringify(updatedLugares));

        limpiarCamposFormulario();
    };

    const limpiarCamposFormulario = () => {
        setIdLugar('');
        setDisponibilidad('Disponible');
        setFecha('');
        setHora('');
    };

    const eliminarLugar = (index) => {
        const updatedLugares = lugaresRegistrados.filter((_, i) => i !== index);
        setLugaresRegistrados(updatedLugares);
        localStorage.setItem('lugaresRegistrados', JSON.stringify(updatedLugares));
    };

    const regresarAOpciones = () => {
        // Redirigir a la página de opciones
        // window.location.href = "adminOpciones.html";
        // En React se usaría react-router-dom u otro enrutador para manejar las rutas
    };

    return (
        <div>
            <h1>Registro de Lugares</h1>
            <form>
                <label htmlFor="idLugar">ID del Lugar:</label>
                <input type="text" id="idLugar" value={idLugar} onChange={(e) => setIdLugar(e.target.value.trim())} required />
                <label htmlFor="disponibilidad">Disponibilidad:</label>
                <select id="disponibilidad" value={disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)} required>
                    <option value="Disponible">Disponible</option>
                    <option value="Ocupado">Ocupado</option>
                </select>
                <label htmlFor="fecha">Fecha:</label>
                <input type="date" id="fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                <label htmlFor="hora">Hora:</label>
                <input type="time" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} required />
                <button type="button" onClick={registrarLugar}>Registrar Lugar</button>
            </form>
            <h1>Lugares registrados:</h1>
            <ul>
                {lugaresRegistrados.map((lugar, index) => (
                    <li key={index}>
                        <strong>ID del Lugar:</strong> {lugar.idLugar}<br />
                        <strong>Disponibilidad:</strong> {lugar.disponibilidad}<br />
                        <strong>Fecha:</strong> {lugar.fecha}<br />
                        <strong>Hora:</strong> {lugar.hora}<br />
                        <button type="button" onClick={() => eliminarLugar(index)}>Eliminar lugar</button>
                    </li>
                ))}
            </ul>
            <button
                    type="button"
                    onClick={handleOpciones}
                    >
                    Regresar a opciones
              </button>
        </div>
    );
};


