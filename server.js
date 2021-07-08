const app = require('./app/app');
const config = require('./app/configuracion/config');
const morgan = require('morgan');
//const express = require('express');
const conexion = require('./app/configuracion/conexion');

conexion.connect();
app.use(morgan('dev'));

app.listen(config.PORT,function(error){
    if(error) return console.log(error);
    console.log(`Servidor en el puerto ${config.PORT}`);
});

