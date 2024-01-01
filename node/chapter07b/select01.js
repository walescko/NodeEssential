let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'livro',
    password: 'Livro123#',
    database: 'livro'
})

let sql = "select id, nome, tipo from carro where tipo = '" + tipo + "'"
connection.query(sql, function (error, results, fields){
    
})

connection.end()