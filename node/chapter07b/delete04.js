import connection from "./connection.cjs"

connection.connect()

let sql = "delete from carro where id = ?"
let id = 31;
connection.query(sql, id, function (error, results, fields){
    if (error) throw error;
    console.log("Carro deletado com sucesso.")
    console.log("Quantidade de registros atualizados: " + results.affectedRows)
})

connection.end()