let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'livro',
    password: 'Livro123#',
    database: 'livro'
})

connection.connect()

let sql = "select id, nome, tipo from carro"// where tipo = '" + tipo + "'"
connection.query(sql, function (error, results, fields){
    if (error) throw error

    let carros = results

    for (let i = 0; carros.length > i; i++){
        console.log(carros[i].id + ": " + carros[i].nome)
    }
})

connection.end()