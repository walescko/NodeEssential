let express = require('express')
let app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(function(req, res, next){
    console.log('Time: ', Data.now())
})

app.get('/', function (req, res) {
    res.send("CARS API")
})


app.use('/api', require('.routes/carros'))

app.get('/teste_erro', function(req, res){
    throw Error('Erro Ninja')
})

app.use(function(req, res, next){
    res.status(404)
    res.json({err: "Não encontrado"})
})

app.use(function logErrors(err,req, res, next){
    console.error(err.stack)
    next(err)
})

app.use(function(err, req, res, next){
    res.status(500)
    res.json({erro: 'Erro na transação'})
})


let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})
