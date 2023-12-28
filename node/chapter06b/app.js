let http = require('http')
let url = require('url')

function callback(request, response){
    let parts = url.parse(request.url)
    let path = parts.path

    response.writeHead(200, {"Content-Type": "application/json; charset=utf-8"})
    if (path == '/test'){
        let people = []
        let People = class{
            constructor(name, surname) {
                this.name = name,
                    this.surname = surname
            }
        }
        let people01 = new People("Ricardo","Lecheta")
        let people02 = new People("Linus", "Torvalds")

        people.push(people01)
        people.push(people02)

        let json = JSON.stringify(people)
        response.end(json)

    } else {
        response.end("Path not found: " + path)
    }
}

let server = http.createServer(callback)
server.listen(3000)
console.log("Servidor inicialized in http://localhost:3000/")