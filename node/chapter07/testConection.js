import connection from "./connection.cjs";
// import connection from "./connection.js"

connection.connect();


let sql = "select id, nome, tipo from carro"// where tipo = '" + tipo + "'"
connection.query(sql, function (error, results, fields){
    if (error) throw error

    let carros = results

    console.log("Consulta ao banco de dados usando For")
    for (let i = 0; carros.length > i; i++){
        console.log(carros[i].id + ": " + carros[i].nome + ", " + carros[i].tipo)
    }
})

connection.end()