let express = require('express')
const router = express.Router()
const CarroDB = require('../model/CarroDB.js')

router.get('/carros', function (req, res){
    CarroDB.getCarros(function (carros){
        res.json(carros)
    })
})

router.get('/carros/:id(\\d_)', function(req, res){
    let id = req.params.id
    CarroDB.getCarroById(id, function(carro){
        res.json(carro)
    })
})

router.delete('/carro/:id(\\d+), ', function(req, res){
    let id = req.params.id
    console.log("Deletar carro " + id)
    CarroDB.deleteById(id, function(affectedRows){
        res.json({msg: 'Carro deletado com sucesso.'})
    })
})
