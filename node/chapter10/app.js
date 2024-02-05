let express = require('express')
let app = express()
const CarroDB = require('./CarroDB.cjs')
let bodyParser = require('body-parser')
app.get('/', function (req, res) {
    res.send("CARS API")
})

app.get('/carros', function (req, res){
    CarroDB.getCarros(function(carros){
        res.json(carros)
    })
})

app.get('/carros/:tipo', function(req, res){
    let tipo = req.params.tipo
    CarroDB.getCarrosByTipo(tipo, function(carros){
        res.json(carros)
    })
})

let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})
