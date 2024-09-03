// email-sender.js
const nodemailer = require('nodemailer');

// Configurer le transporteur
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_PASSWORD'
  }
});

// Configurer l'e-mail
let mailOptions = {
  from: 'YOUR_EMAIL@gmail.com',
  to: 'RECIPIENT_EMAIL@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello from Node.js!'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
