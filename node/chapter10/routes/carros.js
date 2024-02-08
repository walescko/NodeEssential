let express = require('express')
const router = express.Router()
const CarroDB = require('../model/CarroDB.js')

router.get('/carros', function (req, res){
    CarroDB.getCarros(function (carros){
        res.json(carros)
    })
})

