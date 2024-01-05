let mysql - require('mysql')

class CarroDB {
    static connect() {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'livro',
            password: "Livro123#",
            database: 'livro'
        })
    }

    static getCarros(callback) {
        let connection = CarroDB.connect()
        let sql = "select * from carro"
        let query = connection.query(sql, function (error, results, fields){
            if (error) throw  error
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }
    static getCarroByTipo(tipo, callback) {
        let connection = CarroDB.connect()
        let sql = "selec id, nome, tipo from carro where tipo = '" + tipo + "'"
        let query = connection.query(sql, function (error, results, fields){
            if (error) throw  error
            callback(results)
        })
        console.log(query.sql)
        connection.end();
    }

    static getCarroID(id, callback){
        let connection = CarroDB.connect()
        let sql = "select * from carro where id = ?"
        let query = connection.query(sql, id, function (error, results, fields){
            if (error) throw error
            if (results.length == 0){
                console.log("Nenhum carro encontrado")
                return
            }
            let carro = results[0]
            callback(carro)
        })
        console.log(query.sql)
        connection.end()S
    }
}