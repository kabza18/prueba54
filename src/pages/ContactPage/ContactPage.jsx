//react
import React from 'react';

//MUI components
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

//styles
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="column">
        <h2>Información de contacto</h2>
        <p><PhoneIcon /> Contacto: +54 9 11 6852 4373 </p>
        <p><MailOutlineIcon /> E-mail : pablogaleano88@hotmail.com</p>
      </div>
      <div className="column">
        <h2>Formulario de contacto</h2>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" />
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message"></textarea>
          <button className="button_contact" type="submit">Enviar mensaje</button>
        </form>
      </div>
      <div className="column">
        <h2>Horario de atención</h2>
        <p><AccessTimeIcon /> Lunes a viernes: 9:00 hs - 18:00 hs</p>
        <p><AccessTimeIcon /> Sábados y domingos: Cerrado</p>
        <h2>Ubicación</h2>
        <p><LocationOnIcon /> Ituzaingó, Buenos Aires, Argentina </p>
      </div>
    </div>
  );
};

export default ContactPage;
