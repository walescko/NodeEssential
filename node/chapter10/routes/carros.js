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

router.get('/carros/:tipo', function (req, res){
    let tipo = req.params.tipo
    CarroDB.getCarrosByTipo(tipo, function (carros){
        res.json(carros)
    })
})

router.post('/carros', function (req, res ){
    let carro = req.body
    CarroDB.save(carro, function (carro){
        res.json(carro)
    })
})

router.put('/carro', function(req, res){
    let carro = req.body
    CarroDB.update(carro, function (carro){
        res.json({msg: 'Carro atualizado com sucesso.'})
    })
})

module.exports = router

