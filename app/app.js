const express = require('express');
const RutasVinos = require('./rutas/RutasVinos');
const RutasRefrescos = require('./rutas/RutasRefrescos');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/vinos', RutasVinos);
app.use('/refrescos',RutasRefrescos);

module.exports = app;