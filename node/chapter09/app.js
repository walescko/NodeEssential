let express = require('express')
let app = express()

app.get('/', function(req, res) {
    // res.send("Hello World Express")
    res.json({nome: "Walescko", sobrenome: "Chimendes"})
})

let server = app.listen(3000, function() {
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})