// import CarroDB from "./CarroDB.cjs"

let http = require('http')
let url = require('url')

let CarroDB = require('./CarroDB.cjs')

function getCarros(response, tipo){
    CarroDB.getCarrosByTipo(tipo, function (carros){
        let json = JSON.stringify(carros)
        response.end(json)
    })
}

function callback(request, response){
    let parts = url.parse(request.url)
    let path = parts.path
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
    if (path == '/carros/classicos'){
        getCarros(response, "classicos")
    } else if (path == '/carros/esportivos'){
        getCarros(response, "esportivos")
    } else if (path == '/carros/luxo'){
        getCarros(response, "luxo")
    } else {
        response.end("Not found: " + path)
    }
}

let server = http.createServer(callback)
server.listen(3000)
console.log("Servidor iniciado em http://localhost:3000/")
console.log("Se subiu o servidor tudo certo até aqui!")

