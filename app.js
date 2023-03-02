const express = require('express');
const indexRoute = require('./routes/indexRoute');

// const detalheProduto = require('./routes/detalheProduto');

const contatoRoute = require('./routes/contatoRoute');
const medicamentosRoute = require('./routes/medicamentosRoute');
const loginPageRoute = require('./routes/loginPageRoute')

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', indexRoute);

// app.use('/produto', detalheProduto);

app.use('/contato', contatoRoute);
app.use('/medicamentos', medicamentosRoute);
app.use('/login', loginPageRoute);


app.listen(80, () => console.log("Servidor funcionando na porta 80"));

