// Cards.js
import "./styles/cards.css"
import React, { useState, useEffect } from 'react';
import Card from './card';
import axios from 'axios';

function Cards() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const response = await axios.get('https://portafolio-six-rosy.vercel.app/all-proyects');
        setProyectos(response.data);
      } catch (error) {
        console.error('Error al obtener proyectos desde el servidor:', error);
      }
    };

    obtenerProyectos();
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  return (
    <div className="Cards">
      <div className="Cards_content">
        {proyectos.map((proyecto) => (
          <Card key={proyecto._id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
