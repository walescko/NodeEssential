let http = require('http')
let url = require('url')
let callback = function(request, response){
    response.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"})
    let parts = url.parse(request.url)
    if(parts.path == '/'){
        response.end('Site na raiz.')
    } else if (parts.path == '/cars') {
        response.end("Você digitou a rota /cars.")
    } else {
        response.end("Rota inválida: " + parts.path)
    }
}
let server = http.createServer(callback)
server.listen(3000);
console.log("Servidor iniciado em http://localhost:3000/")