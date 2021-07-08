const express = require('express');
const RutasVinos = require('./rutas/RutasVinos');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/vinos', RutasVinos);

module.exports = app;