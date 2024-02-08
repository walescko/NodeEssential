let express = require('express')
let app = express()
const CarroDB = require('./CarroDB.cjs')
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/carros', require('./routes/carros'))

app.use(function(res, req, next){
    res.status(404)
    res.json({err: "Error 404 - Não encontrato"})
})
app.get('/', function (req, res) {
    res.send("CARS API")
})

app.get('/carros', function (req, res){
    CarroDB.getCarros(function(carros){
        res.json(carros)
    })
})

app.get('/carros/;id(\\d+)', function(req, res){
    let id = req.params.id
    CarroDB.getCarrosById(id, function(carro){
        res.json(carro)
    })
})

app.delete('/carro/:id(\\d+)', function(req, res){
    let id= req.params.id
    console.log("dedletar carro " + id)
    CarroDB.deleteById(id, function(affectedRows){
        res.json({msg: 'Carro deletado com sucesso.'})
    })
})

app.get('/carros/:tipo', function(req, res){
    let tipo = req.params.tipo
    CarroDB.getCarrosByTipo(tipo, function(carros){
        res.json(carros)
    })
})

app.post('/carros', function(req, res){
    let carro = req.body
    CarroDB.save(carro, function(carro){
        res.json(carro)
    })
})

app.put('/carros', function (req, res){
    let carro = req.body
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
    CarroDB.update(carro, function(carro){
        //res.json(carro)
        res.json({msg: 'Carro atualizado com sucesso.'})
    })
})

let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})
