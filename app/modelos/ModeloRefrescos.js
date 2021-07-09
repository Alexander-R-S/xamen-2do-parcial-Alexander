const mongoose = require('mongoose');

const RefrescosSchema = new mongoose.Schema({
    codigo:{
        type:Number,
        unique:true, 
        require:true
    },
    nombre:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    precio:{
        type:Number,
        require:true
    },
    FechaRegistro:{
        type:Date,
        require:true,

    }
})

const Refresco = mongoose.model('Refresco', RefrescosSchema);
module.exports = Refresco;