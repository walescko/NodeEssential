import connection from "./connection.cjs"

connection.connect()

let sql = "select id, nome, tipo from carro"// where tipo = '" + tipo + "'"
connection.query(sql, function (error, results, fields){
    if (error) throw error

    let carros = results

    console.log("Consulta ao banco de dados usando For")
    for (let i = 0; carros.length > i; i++){
        console.log(carros[i].id + ": " + carros[i].nome + ", " + carros[i].tipo)
    }

    console.log("Consulta ao banco de dados usando for mofificado")
    for (let i in carros){
        let carro = carros[i]
        console.log(carro.id + ": " + carro.nome + ", " + carro.tipo)
    }

    console.log("Consulta ao banco de dados com a função map via callback")
    carros.map(c => console.log(c.id + ": " + c.nome + ", " + c.tipo))
})

connection.end()