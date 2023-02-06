import React from 'react';
import freeCodeCampLogo from '../imagenes/freecodecamplogo.png'
import '../hojas-de-estilo/Logo.css';

const Logo = ()=> (
    <div className = 'freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className = 'freecodecamp-logo'
          alt ='Logo de freeCodeCamp' />

      </div>
);

export default Logo;