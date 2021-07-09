const ModeloRefrescos = require('../modelos/ModeloRefrescos');

function index(req,res){
    console.log('ok');
    ModeloRefrescos.find({})
    .then(refrescos => {
        if(refrescos.length) return res.status(200).send({refrescos});
        return refrescos.status(204).send({message: 'no hay datos para mostrar'})
    }).catch(error => res.status(500).send({error}));
}

function crear(req,res){
    new ModeloRefrescos(req.body).save()
    .then(refrescos => res.status(200).send({refrescos}))
    .catch(error => res.status(500).send({error}));
}


function buscar(req,res,next) {
    let consulta = {};
    consulta[req.params.key]=req.params.value;
    ModeloRefrescos.find(consulta)
        .then(refrescos => {
            if (!refrescos.length) return next();
            req.body.refrescos = refrescos;
            return next();
        }).catch(error => {
            req.body.error=error;
            next();
        })
    
}

function mostrar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'No se pudo encontrar el producto'});
    let refrescos = req.body.refrescos;
    return res.status(200).send({refrescos});
}

function actualizar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'No se puede actualizar'});
    let refrescosobj = req.body.refrescos[0];
    refrescosobj = Object.assign(refrescosobj,req.body);
    refrescosobj.save().then(refrescosAlta => {
        res.status(200).send({message:"El registro se actualizo correctamente", refrescosAlta});
    }).catch(error => res.status(500).send({error}));
}

function eliminar(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.refrescos) return res.status(404).send({message:'No se puede eliminar el registro'});
    req.body.refrescos[0].remove().then(refresbaja => {
        res.status(200).send({message:"Eliminado correctamente", refresbaja});
    }).catch(error => res.status(500).send({message:"Error al momento de elimiar",error}));
}

module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminar
}
