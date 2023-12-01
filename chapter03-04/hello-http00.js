let http = require('http') //carregando o módulo
//Criando o servidor
let server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "text/plain"}) //Header
    response.end("Hellor World Node! News") //mensagem de retorno
})

server.listen(3000) //porta de execução
console.log("Servidor iniciado em http://localhost:3000")