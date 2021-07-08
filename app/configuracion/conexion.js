//creamos la conexion
const mongoose = require('mongoose');
const config = require('../configuracion/config')

module.exports={
    connection: null,
    connect: function(){
        if(this.connection) return this.connection
        return mongoose.connect(config.BD).then(conexion => {
            this.connection = conexion;
            console.log('La canexion fue exitosa');
        }).catch(error => console.log(error));
    }
}

