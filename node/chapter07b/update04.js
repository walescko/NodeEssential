import connection from "./connection.cjs"

connection.connect()

let sql = "update carro set ? where id = ?"
let json = {id:31, nome: "Fiat 147", tipo: "Carroça"}
let id = json.id
connection.query(sql, [json, id], function(error, results, fields){
    if (error) throw error
    console.log("Carro atualizado com sucesso.")
    console.log("Quantidade de registros atualizados: " + results.affectedRows)
})

connection.end()