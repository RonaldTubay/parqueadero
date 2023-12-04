import React, { useEffect } from 'react';
import '../css/perfil.css'; // Asegúrate de importar tu archivo CSS correctamente

export const UserProfile = ({onFormSwitch}) => {

  const handlePrincipal = () => {
    onFormSwitch('principal');
  };
  const handleReserva = () => {
    onFormSwitch('reservar');
  };

  useEffect(() => {
    const userProfile = document.getElementById('user-profile');
    // const cerrarSesionButton = document.getElementById('regresar-principal');
    // const regresarPostularButton = document.getElementById('regresar-postular');
    const listaReservas = document.getElementById('lista-reservas');

    const usuario = JSON.parse(localStorage.getItem('usuarios'))[0]; // Suponiendo un solo usuario

    if (usuario) {
      const profileHTML = `
        <p><strong>Nombre de Usuario:</strong> ${usuario.username}</p>
        <p><strong>Nombres:</strong> ${usuario.nombres}</p>
        <p><strong>Apellidos:</strong> ${usuario.apellidos}</p>
        <p><strong>Correo Electrónico:</strong> ${usuario.correo}</p>
        <p><strong>Número de Celular:</strong> ${usuario.celular}</p>
        <p><strong>Cédula:</strong> ${usuario.cedula}</p>
      `;
      userProfile.innerHTML = profileHTML;
    }

    // cerrarSesionButton.addEventListener('click', () => {
    //   window.location.href = 'sesionUsuario.html';
    // });

    // regresarPostularButton.addEventListener('click', () => {
    //   window.location.href = 'reservar.html';
    // });

    const reservas = JSON.parse(localStorage.getItem('reservas')) || [];

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
          listItem.remove();
        });

        listItem.appendChild(deleteButton);
        listaReservas.appendChild(listItem);
      });
    }
  }, []);

  return (
    <div className="container">
      <h2>Mi Perfil</h2>
      <div id="user-profile"></div>
      <h2>Reservas Registradas</h2>
      <ul id="lista-reservas"></ul>
      <button
                    type="button"
                    onClick={handlePrincipal}
                    >
                    Regresar al inicio
              </button>
              <button
                    type="button"
                    onClick={handleReserva}
                    >
                    Reservar
              </button>
    </div>
  );
};

