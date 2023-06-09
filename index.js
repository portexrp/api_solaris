require('dotenv').config()
const express = require('express');
const connection = require('./src/database')
const cors = require('cors');

const app = express();
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  response.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'] // Adicione o cabeçalho 'Content-Type' aqui
}));

app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

const insertForm = require('./src/controllers/orcamento/insertForm');
const cadFuncionario = require('./src/controllers/funcionario/cadFuncionario');
const getOrcamentos = require('./src/controllers/dashboard/getOrcamentos.js')
const session = require('./src/controllers/session/session');
const validateToken = require('./src/middlewares/validateToken');

app.post('/form', insertForm);
app.post('/funcionario', validateToken, cadFuncionario);
app.get('/funcioario')
app.post('/orcamento');
app.get('/dashboard', validateToken, getOrcamentos)
app.post('/session', session);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000.');
});
