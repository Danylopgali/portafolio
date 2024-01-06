import "./styles/card.css"
import React from 'react';

function Card({ proyecto }) {
  return (
    <div className="Card">
      <div className="Contenido">
        <img src={proyecto.imagen} alt="Imagen" />
        <div className="proyecto">{proyecto.name}</div>
        <div className="tecnologias">{proyecto.tecnologias.join(', ')}</div>
      </div>
    </div>
  );
}

export default Card;
