// En tu componente Home.js
import React from 'react';
import Contacto from "../components/contacto";
import Header from "../components/header";
import Proyects from "../components/proyects";
import Foter from '../components/foter';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Proyects id="proyectos" />
      <Contacto id="contacto" />
      <Foter />
    </div>
  );
}

export default Home;

  