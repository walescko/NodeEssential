import connection from "./connection.cjs"

// let mysql = require('mysql')
//
// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'livro',
//     password: 'Livro123#',
//     database: 'livro'
// })


connection.connect()

let sql = "select id, nome, tipo from carro where id = ?"
let id = 11
connection.query(sql, id, function (error, results, fields){
    if (error) throw error
    if (results.legth == 0){
        console.log("Nenhum carro encontrado")
        return
    }
    let carro = results[0]
    console.log(carro.id + ": " + carro.nome)
})

connection.end()