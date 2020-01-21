const express = require('express'); //comunicacao
const mongoose = require('mongoose'); //banco
const cors = require('cors');   //integracao mobile

const routes = require('./routes');  //importa rotas
const { MONGO_USER, MONGO_PASS, MONGO_DB } = require('../.env'); //
  

const app = express(); //inicializa express

//conexao com o banco de dados
//senha deve ser alfanumerica
mongoose.connect(
   `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0-mdpym.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
   }
);


app.use(cors( /*{ origin: 'https://localhost:3000' }*/ ))   //backend compartilhar informacao com outro endereco
app.use(express.json());   // Para o express entender requisicoes no formato JSON
app.use(routes);           //importa rotas e depende da linha de cima

//porta de teste
app.listen(3333);    //definir explicitamente a porta

// Metodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros
//
//Query Params:   request.query  (Filtros, ordenacao, paginacao, ...)              '<url>/<rota>/?search=Diego'
//Route Params:   request.params (Identificar um recurso na alteracao, remocao)    '<url>/<rota>/:name'
//Body:           request.body   (Dados para criacao ou alteracao de um registro)  objeto JSON