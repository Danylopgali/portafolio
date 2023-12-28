import React, { useState } from "react";
import "./styles/contacto.css";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contacto() {
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleEnviar = async (e) => {
    e.preventDefault();

    // Verificar que los campos tengan la longitud mínima requerida
    if (subject.length < 3 || text.length < 3) {
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000); // Ocultar la alerta después de 3 segundos
      return;
    }

    try {
      await axios.post('http://localhost:3001/send-email', {
        subject,
        text,
      });

      // Mostrar la alerta de envío exitoso
      setShowSuccessAlert(true);

      // Restablecer los estados después de un tiempo (en este caso, 3 segundos)
      setTimeout(() => {
        setSubject("");
        setText("");
        setShowSuccessAlert(false);
      }, 3000); // Ocultar la alerta después de 3 segundos

    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error.message);
      // Mostrar la alerta de error
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 3000); // Ocultar la alerta después de 3 segundos
    }
  };

  return (

    <div id="contacto" className="Contacto">
      <div className="tituloC">Contacto</div>
     {/* La alerta de éxito */}
     {showSuccessAlert && (
          <div className="alert alert-success" role="alert">
            Correo electrónico enviado con éxito
          </div>
        )}

        {/* La alerta de error */}
        {showErrorAlert && (
          <div className="alert alert-danger" role="alert">
            Verifica que los campos "subject" y "text" tengan al menos 3 caracteres.
          </div>
        )}

        <div className="container-1">
          <div className="subject">
            <input
              className="input-subject"
              type="text"
              id="subject"
              placeholder="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>

        <div className="container-2">
          <div className="text">
            <textarea
              className="input-text"
              id="text"
              placeholder="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>

        <button className="boton" type="button" onClick={handleEnviar}>
          Enviar
        </button>
    </div>
  );
}

export default Contacto;



// import React, { useState } from "react";
// import "./styles/contacto.css";
// import axios from 'axios';

// function Contacto() {
//   const [from, setfrom] = useState("");
//   const [subject, setsubject] = useState("");
//   const [text, settext] = useState("");

//   const handleEnviar = async(e) => {
//     // Aquí puedes manejar la lógica para enviar los datos
//     console.log("from:", from);
//     console.log("subject:", subject);
//     console.log("text:", text);
    
//       e.preventDefault();
  
//       try {
//         const response = await axios.post('http://localhost:3001/send-email', {
//           from,
//           subject,
//           text,
//         });
  
//         console.log('Respuesta del servidor:', response.data);
        
//         // Aquí puedes manejar la respuesta del servidor según tus necesidades
  
//       } catch (error) {
//         console.error('Error al enviar el correo electrónico:', error.message);
//         // Aquí puedes manejar el error según tus necesidades
//       }
//   };

//   return (

    
//     <div id="contacto" className="Contacto">
//       <div className="tituloC">Contacto</div>
//       <form>
//         <div className="container-1">
//           <div className="to">
//             <input
//             className="input-to"
//               type="to"
//               id="to"
//               placeholder="from"
//               value={from}
//               onChange={(e) => setfrom(e.target.value)}
//             />
//           </div>

//           <div className="subject">
//             <input
//             className="input-subject"
           
//               type="text"
//               id="subject" 
//               placeholder="subject"
//               value={subject}
//               onChange={(e) => setsubject(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="container-2">
//           <div className="text">
//             <textarea
//             className="input-text"
//               id="text"
//               placeholder="text"

//               value={text}
//               onChange={(e) => settext(e.target.value)}
//             />
//           </div>
//         </div>

//         <button  className="boton" type="button" onClick={handleEnviar}>
//           Enviar
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contacto;
