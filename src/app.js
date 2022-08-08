// Importação CommonJS modules
require('dotenv').config();
const express = require('express');
const path = require('path');
const webRoutes = require('./routes/web');

// Criar aplicação WEB express
const app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Arquivos estáticos
app.use(express.static(path.join(process.cwd(), 'public')));

// Midlewares
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencoded

// Arquivos de rotas
app.use('/', webRoutes);

// Exportar a aplicação
module.exports = app;
