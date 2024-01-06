import "./styles/header.css"
import Navbar from "./navbar"
function Header() {
    return (
      <div className="Header">
        <Navbar/>
        <div className="circulo">
            <img className="circulo_img" src="https://res.cloudinary.com/dzmdw4gta/image/upload/v1703122329/Portfolio%20web/Foto_Daniel_avitto.jpg" alt="Daniel Lopez"
          />
           </div>
         <div className="portada">
         
         <img src="https://res.cloudinary.com/dzmdw4gta/image/upload/v1703097796/Portfolio%20web/WhatsApp_Image_2023-12-20_at_12.42.22_PM_jicu0q.jpg" alt="MDN"
          />
          <div className="logo">
          <p className="Nombre">Daniel Lopez</p>
          <p className="Carrera">Full Stack</p>
          </div>

        <div className="overlay">  </div>

      </div>
      
      <div id="sobre-mi"className="sobre_mi">   
          <div className="tituloSM">
          Sobre mi
          </div>
          
          <div className="contenidoSM">
            Como desarrollador Full Stack y apasionado por la tecnología estoy en constante búsqueda de oportunidades para aplicar mis
           conocimientos en desarrollo web y robótica.
           <br/><br/>
           Actualmente me encuentro en la carrera de ingeniería en computación y tomando cursos para reforzar mis conocimientos.
           </div>

        </div>
      </div>
    );
  }
  
  export default Header;
  