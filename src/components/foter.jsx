import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles/foter.css";

function Foter() {
  return (
    <div className="Foter">
      <Link to="https://www.linkedin.com/in/jose-daniel-l%C3%B3pez-galindo-a4b858242/" target="_blank" className="linkedin">
        <i className="bi bi-linkedin"></i>
      </Link>
      <Link to="https://github.com/Danylopgali" target="_blank" className="github">
        <i className="bi bi-github"></i>
      </Link>
      <button className="cv"><i class="bi bi-file-earmark-person"></i></button>

    </div>
  );
}

export default Foter;

