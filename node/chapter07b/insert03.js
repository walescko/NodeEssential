import connection from "./connection.cjs"
connection.connect()

let sql = "insert into carro set ?"
let carro = {nome: "Meu Carro", tipo : "esportivos"}
connection.query(sql, carro, function(error, results, fields) {
        if (error) throw error;
        console.log("Carro salvo com sucesso, id: " + results.insertId)
    })

connection.end()