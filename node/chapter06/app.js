let http = require('http')
let url = require('url')

function callback(request, response){
    let parts = url.parse(request.url)
    let path = parts.path
    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
    if (path == '/teste'){
        let pessoa = {'nome':'Walescko', 'sobrenome':'Chimendes'}
        let json = JSON.stringify(pessoa)
        response.end(json)
    } else {
        response.end("Not found: " + path)
    }
}

let server = http.createServer(callback)
server.listen(3000)
console.log("Servidor iniciado em http://localhost:3000/")
console.log("Se leu essa mensagem tudo certo.")