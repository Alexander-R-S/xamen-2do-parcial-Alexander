const express = require('express');
const Router = express.Router();
const controladorVinos = require('../controlador/ControladorVinos');

Router.get('/',controladorVinos.index)
        .post('/',controladorVinos.crear)
        .get('/:key/:value',controladorVinos.buscar,controladorVinos.mostrar)
        .put('/:key/:value',controladorVinos.buscar,controladorVinos.actualizar)
        .delete('/:key/:value',controladorVinos.buscar,controladorVinos.eliminar);

module.exports = Router;