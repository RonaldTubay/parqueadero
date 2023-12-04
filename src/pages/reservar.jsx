import React, { useEffect } from 'react';
import '../css/reservar.css';

export const RegistroReservas = ({ onFormSwitch }) => {
    const handlePerfil = () => {
        onFormSwitch('perfil');
    };

    useEffect(() => {
        const registroReservasForm = document.getElementById("registro-reservas-form");
        const regresarPerfilButton = document.getElementById("regresarPerfilButton");
        
        const colorVehiculoValor = document.getElementById("color-vehiculo").value.trim();
        const numeroPlacaValor = document.getElementById("numero-placa").value.trim();
        const modeloVehiculoValor = document.getElementById("modelo-vehiculo").value.trim();

        const idLugar = document.getElementById("id-lugar");
        const fechaReserva = document.getElementById("fecha-reserva");
        const horaInicio = document.getElementById("hora-inicio");
        const horaFinal = document.getElementById("hora-final");
        const cedula = document.getElementById("cedula");
        const nombres = document.getElementById("nombres");
        const apellidos = document.getElementById("apellidos");

        const handleSubmit = (e) => {
            e.preventDefault();
            const colorVehiculoValor = document.getElementById("color-vehiculo").value.trim();
            const numeroPlacaValor = document.getElementById("numero-placa").value.trim();
            const modeloVehiculoValor = document.getElementById("modelo-vehiculo").value.trim();
            const idLugarValor = idLugar.value.trim();
            const fechaReservaValor = fechaReserva.value;
            const horaInicioValor = horaInicio.value;
            const horaFinalValor = horaFinal.value;
            const cedulaValor = cedula.value.trim();
            const nombresValor = nombres.value.trim();
            const apellidosValor = apellidos.value.trim();

            if (!colorVehiculoValor) {
                alert("Ingrese el color del vehículo.");
                return;
            }
        
            if (!/^([A-Za-z0-9]+)$/.test(numeroPlacaValor)) {
                alert("El número de placa debe contener letras y números.");
                return;
            }
        
            if (!modeloVehiculoValor) {
                alert("Ingrese el modelo del vehículo.");
                return;
            }

            if (!/^\d+$/.test(idLugarValor)) {
                alert("ID del Lugar debe contener solo números.");
                return;
            }

            if (!fechaReservaValor) {
                alert("Seleccione una Fecha de Reserva válida.");
                return;
            }

            if (!horaInicioValor || !horaFinalValor) {
                alert("Seleccione Hora de Inicio y Hora de Finalización válidas.");
                return;
            }

            if (!/^\d{10}$/.test(cedulaValor)) {
                alert("Cédula debe contener 10 números.");
                return;
            }

            if (!/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(nombresValor) || !/^[a-zA-ZÁÉÍÓÚÜáéíóúü\s]+$/.test(apellidosValor)) {
                alert("Los campos de Nombres y Apellidos solo pueden contener letras, letras con tildes y espacios.");
                return;
            }

            const reserva = {
                colorVehiculo: colorVehiculoValor,
                numeroPlaca: numeroPlacaValor,
                modeloVehiculo: modeloVehiculoValor,
                idLugar: idLugarValor,
                fechaReserva: fechaReservaValor,
                horaInicio: horaInicioValor,
                horaFinal: horaFinalValor,
                cedula: cedulaValor,
                nombres: nombresValor,
                apellidos: apellidosValor,
            };

            const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
            reservas.push(reserva);
            localStorage.setItem("reservas", JSON.stringify(reservas));

            alert("Reserva registrada con éxito.");
            registroReservasForm.reset();
        };

        if (registroReservasForm) {
            registroReservasForm.addEventListener("submit", handleSubmit);
        }


        return () => {
            if (registroReservasForm) {
                registroReservasForm.removeEventListener("submit", handleSubmit);
            }
        };
    }, []);

    return (
        <div className="container">
            <h2>Registro de reservas</h2>
            {/* Tu formulario */}
            <form id="registro-reservas-form">
            <div className="form-group">
                <label htmlFor="color-vehiculo">Color de Vehículo:</label>
                <input type="text" id="color-vehiculo" name="color-vehiculo" required />
            </div>
            <div className="form-group">
                <label htmlFor="numero-placa">Número de Placa:</label>
                <input type="text" id="numero-placa" name="numero-placa" required />
            </div>
            <div className="form-group">
                <label htmlFor="modelo-vehiculo">Modelo de Vehículo:</label>
                <input type="text" id="modelo-vehiculo" name="modelo-vehiculo" required />
            </div>
    <div className="form-group">
        <label htmlFor="id-lugar">ID del Lugar:</label>
        <input type="text" id="id-lugar" name="id-lugar" required />
    </div>
    <div className="form-group">
        <label htmlFor="fecha-reserva">Fecha de Reserva:</label>
        <input type="date" id="fecha-reserva" name="fecha-reserva" required />
    </div>
    <div className="form-group">
        <label htmlFor="hora-inicio">Hora de Inicio:</label>
        <input type="time" id="hora-inicio" name="hora-inicio" required />
    </div>
    <div className="form-group">
        <label htmlFor="hora-final">Hora de Finalización:</label>
        <input type="time" id="hora-final" name="hora-final" required />
    </div>
    <div className="form-group">
        <label htmlFor="cedula">Cédula:</label>
        <input type="text" id="cedula" name="cedula" required pattern="[0-9]{10}" />
    </div>
    <div className="form-group">
        <label htmlFor="nombres">Nombres:</label>
        <input type="text" id="nombres" name="nombres" required />
    </div>
    <div className="form-group">
        <label htmlFor="apellidos">Apellidos:</label>
        <input type="text" id="apellidos" name="apellidos" required />
    </div>
    <button type="submit">Registrar Reserva</button>
</form>

            <button
                type="button"
                id="regresarPerfilButton"
                onClick={handlePerfil}
            >
                Regresar al perfil
            </button>
        </div>
    );
};
