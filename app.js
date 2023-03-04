const express = require('express');
const indexRouter = require('./routes/indexRouter');
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
app.use('/products', productsRouter)
app.use('/user', userRouter)

// Essas rotas serão descontinuadas 

app.use('/contato', contatoRoute);

app.listen(80, () => console.log("Servidor funcionando na porta 80"));

