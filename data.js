const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const nodemailer = require('nodemailer');
const data = express();

data.use(bodyParser.urlencoded({extended: false}));
data.use(bodyParser.json());

data.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'multipart/form-data');
  next();
  });

data.post('/', (req, res) => {
  const output = `
    <p>Заявка на татуировку</p>
    <h3>Форма:</h3>
    <ul>
      <li>Имя: ${req.body.firstName}</li>
      <li>Фамилия: ${req.body.lastName}</li>
      <li>Возраст: ${req.body.age}</li>
      <li>Номер телефона: ${req.body.phone}</li>
      <li>Email: ${req.body.email}</li>
      <li>Место татуировки на теле: ${req.body.body}</li>
      <li>Размер татуировки (длина): ${req.body.tattooHeight}</li>
      <li>Размер татуировки (ширина): ${req.body.tattooWidth}</li>
    </ul>
    <h3>Текст обращения</h3>
    ${req.body.text}
  `
  res.send('Successful');

  async function main() {
    let transporter = nodemailer.createTransport( {
      service: "Gmail",
      auth: {
          user: 'murktattoo.spb@gmail.com',
          pass: '2563075Murk'
      },
    });

    let info = await transporter.sendMail({
      from: 'murktattoo.spb@gmail.com',
      to: 'igormurktattoo@gmail.com',
      subject: 'Заявка на тату',
      html: output,
    /*  attachments: [{
          filename: '',
          path: ***
          path: window.URL.revokeObjectURL()
      }] */
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
  main().catch(console.error);
})

data.listen(3000, () => {console.log('Server started...')});
