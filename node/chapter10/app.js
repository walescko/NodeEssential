let express = require('express')
let app = express()
app.get('/', function (req, res) {
    res.send("CARS API")
})

app.get('/carros', function (req, res){
    res.send("Lista de todos os carros aqui.")
})

app.get('/carros/:tipo', function(req, res){
    let tipo = req.params.tipo
    res.send("Lista dos carros: " + tipo)
})

let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})
