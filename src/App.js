import React, { useState } from 'react';
import './App.css';
import { RegistroUsuario } from './pages/registroUsuario';
import { AdminLogin } from './pages/sesionAdmin';
import { IniciarSesion } from './pages/sesionUsuario';
import { Opciones } from './pages/adminOpciones';
import { RegistroLugares } from './pages/gestionLugares';
import { GestionPostulaciones } from './pages/gestionReservas';
import { Horario } from './pages/horario';
import { UserProfile } from './pages/perfil';
import { Principal } from './pages/principal';
import { RegistroReservas } from './pages/reservar';

function App() {
  const [currentForm, setCurrentForm] = useState('principal');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const components = {
    login: <IniciarSesion onFormSwitch={toggleForm} />,
    loginAdmin: <AdminLogin onFormSwitch={toggleForm} />,
    registro: <RegistroUsuario onFormSwitch={toggleForm} />,
    adminOpciones: <Opciones onFormSwitch={toggleForm} />,
    registroLugares: <RegistroLugares onFormSwitch={toggleForm} />,
    registroReservas: <GestionPostulaciones onFormSwitch={toggleForm} />,
    horario: <Horario onFormSwitch={toggleForm} />,
    perfil: <UserProfile onFormSwitch={toggleForm} />,
    principal: <Principal onFormSwitch={toggleForm} />,
    reservar: <RegistroReservas onFormSwitch={toggleForm} />,
  };

  const CurrentComponent = components[currentForm];

  return (
    <div className="App">
      {CurrentComponent}
    </div>
  );
}

export default App;
