import React, { useEffect } from 'react';
import '../css/gestionReservas.css';

export const GestionPostulaciones = ({ onFormSwitch }) => {
  useEffect(() => {
    const listaReservas = document.getElementById('lista-reservas');
    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];

    const updateReservasList = () => {
      listaReservas.innerHTML = '';

      if (reservas.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'No se han registrado reservas aún.';
        listaReservas.appendChild(mensaje);
      } else {
        reservas.forEach((reserva, index) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <strong>Color del Vehículo:</strong> ${reserva.colorVehiculo}<br>
            <strong>Número de Placa:</strong> ${reserva.numeroPlaca}<br>
            <strong>Modelo de Vehículo:</strong> ${reserva.modeloVehiculo}<br>
            <strong>ID del Lugar:</strong> ${reserva.idLugar}<br>
            <strong>Fecha de Reserva:</strong> ${reserva.fechaReserva}<br>
            <strong>Hora de Inicio:</strong> ${reserva.horaInicio}<br>
            <strong>Hora de Finalización:</strong> ${reserva.horaFinal}<br>
            <strong>Cédula:</strong> ${reserva.cedula}<br>
            <strong>Nombres:</strong> ${reserva.nombres}<br>
            <strong>Apellidos:</strong> ${reserva.apellidos}<br>
          `;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Eliminar Reserva';
          deleteButton.addEventListener('click', () => {
            reservas.splice(index, 1);
            localStorage.setItem('reservas', JSON.stringify(reservas));
            updateReservasList(); // Actualizar la lista después de eliminar
          });

          listItem.appendChild(deleteButton);
          listaReservas.appendChild(listItem);
        });
      }
    };

    updateReservasList();
  }, []);

  const handleOpciones = () => {
    onFormSwitch('adminOpciones');
  };

  return (
    <div>
      <h2>Reservas Registradas</h2>
      <ul id="lista-reservas"></ul>
      <button type="button" onClick={handleOpciones}>
        Regresar a opciones
      </button>
    </div>
  );
};
