let express = require('express')
let app = express()

let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/pessoa', function(req, res) {
    let  nome = req.query.nome
    let sobrenome = req.query.sobrenome
    // res.json({nome: "Walescko", sobrenome: "Chimendes"})
    res.status(200).type("text")
    // res.send("Hello World Express 2")
    res.send(nome + " " + sobrenome)
    // res.json({msg: 'ops...'})
    // let id = req.params.id
    // res.send("Buscar a pessoa: " + id)
})

app.post('/pessoa', function (req, res){
    let nome = req.body.nome
    let sobrenome = req.body.sobrenome
    res.send(nome + " " + sobrenome)
})

let server = app.listen(3000, function() {
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})