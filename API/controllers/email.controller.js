const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  try {
    const {from,  subject, text } = req.body;

    // Configuración del transporter de nodemailer (configúralo según tus necesidades)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'daniellopg13@gmail.com',
        pass: 'zozk krqi pfli vjqe',
      },
    });

    // Opciones del correo electrónico
    const mailOptions = {
      from,
      to :"daniellopg@hotmail.com",
      subject,
      text,
    };

    // Enviar el correo electrónico
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Correo electrónico enviado con éxito', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al enviar el correo electrónico' });
  }
};

module.exports = {
  sendEmail,
};
//zozk krqi pfli vjqe