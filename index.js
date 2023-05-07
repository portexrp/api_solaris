require('dotenv').config()
const express = require('express');
const connection = require('./src/database')
const cors = require('cors');
const { request } = require('https');

const app = express();
app.use(cors());
app.use(express.json())

//connection.authenticate()
//connection.sync({ alter: true })

//const insertForm = require('./src/controllers/insertForm');

//app.post('/form', insertForm);

app.get('/teste', (request, response)=>{
  response.send('Está funcionando!')
})

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
});
