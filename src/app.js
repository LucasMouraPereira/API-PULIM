const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = 'mongodb+srv://pulim:ioasys1234@cluster0-qil1t.mongodb.net/test?retryWrites=true&w=majority';
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!')
});

//BodyParser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');
const pathsRoute = require('./Routes/paths');
const categoriesRoute = require('./Routes/categories');
const institutesRoute = require('./Routes/institutes');
const clientsRoute = require('./Routes/clients');
const visitsRoute = require('./Routes/visits');

app.use('/', indexRoute);
app.use('/users', usersRoute);
app.use('/paths', pathsRoute);
app.use('/categories', categoriesRoute);
app.use('/institutes', institutesRoute);
app.use('/clients', clientsRoute);
app.use('/visits', visitsRoute);

app.listen(process.env.PORT || 8080, () => {
    console.log('Servidor esta rodando');
});

module.exports= app;

/*

200 - ok
201 - Created
202 - Accepted

400 - Bad request
401 - Unauthorized -- AUTENTICAÇÃO, tem caráter temporário.
403 - Forbidden -- AUTENTICAÇÃO, tem caráter permanente.
404 - Not found.

500 - Internal server error
501 - Not Implemented - a API não suporta essa funcionalidade
503 - Service Unavailable - a API executa essa operaçao, mas no momento está indisponivel

*/