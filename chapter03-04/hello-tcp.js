let net = require('net')
let count = 1
let server = net.createServer(function (socket){
    console.log("Cliente conectou do IP: " + socket.remoteAddress)
    socket.end("Hello World TCP: " + (count++) + "\n")
})

server.listen(3000, "localhost")
console.log("Servidor TCP Iniciado...")