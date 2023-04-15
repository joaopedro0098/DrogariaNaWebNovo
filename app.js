const express = require('express');
const indexRouter = require('./routes/indexRouter');
const detalheProduto = require('./routes/detalheProduto'); 
const contatoRoute = require('./routes/contatoRoute');
const productsRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter')

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', indexRouter);
app.use('/produto', detalheProduto);  
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);



app.use('/contato', contatoRoute);


app.listen(80, () => console.log("Servidor funcionando na porta 80"));

/*
const express = require('express');

const userRouter = require('./routes/userRouter');
require('./databases');
const app = express()

aplication.use(express.json());
app.use('/',userRouter);

app.listen(8080);
*/