const nodemailer = require("nodemailer")

let testAccount = nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
  port: 587,
  secure: false,
  service: 'gmail',
  requireTLS: true,
  auth: {
    user: "herbymailer@gmail.com", //aca el user es el de herby --> desde donde se mandarán los mails a los clientes
    pass: "ecommercep5", //password del user herby
  },
});

module.exports= transporter