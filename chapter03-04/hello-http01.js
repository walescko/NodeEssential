let http = require('http')
let callback = function(request, response){
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end("Hello World nodejs with callback function!\n")
}

let server = http.createServer(callback)
server.listen(3000)
console.log("Servidor iniciado...")