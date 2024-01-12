//import CarroDB from "./CarroDB.js"
let http = require('http')
let url = require('url')

const CarroDB = require('./CarroDB.js')

function getCarros(response, tipo){
    CarroDB.getCarrosByTipo(tipo, function (carros){
        let json = JSON.stringify(carros)
        response.end(json)
    })
}

function salvarCarro(response, carro){
    CarroDB.save(carro, function (carro){
        console.log("Carro salvo com sucesso: " + carro.id)
        let json = JSON.stringify(carro)
        response.end(json)
    })
}

function callback(request, response){
    let parts = url.parse(request.url)
    let path = parts.path
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
    if(request.method == "GET") {
        if (path == '/carros/classicos') {
            getCarros(response, "classicos")
        } else if (path == '/carros/esportivos') {
            getCarros(response, "esportivos")
        } else if (path == '/carros/luxo') {
            getCarros(response, "luxo")
        } else {
            response.end("Not found: " + path)
        }
    } else if (request.method == "POST") {
        let body = ''
        request.on('data', function(data){
            body += data
        })
        request.on('end', function (){
            // response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
            console.log("POST Body" + body)
            let carro = JSON.parse(body)
            salvarCarro(response, carro)
            // response.end("POST Body: " + body)
        })
        return
    }
}

let server = http.createServer(callback)
server.listen(3000)
console.log("Servidor iniciado em http://localhost:3000/")
console.log("Se subiu o servidor tudo certo até aqui!")

