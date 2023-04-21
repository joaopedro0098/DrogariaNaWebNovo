const express = require('express');
const indexRouter = require('./routes/indexRouter');
const detalheProduto = require('./routes/detalheProduto'); 
const contatoRoute = require('./routes/contatoRoute');
const productsRouter = require('./routes/productsRouter');
const userRouter = require('./routes/userRouter')

// const carrinhoDeCompras = require('./routes/carrinhoDeCompras')


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
// app.use('/carrinho', carrinhoDeCompra);

app.listen(80, () => console.log("Servidor funcionando na porta 80"));

