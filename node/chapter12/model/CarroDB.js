let mysql = require('mariadb')

class CarroDB {
    static connect() {
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'livro',
            password: "livro123",
            database: 'livro',
        })
        connection.connect()
        return connection
    }

    static getCarros(callback) {
        let connection = CarroDB.connect()
<<<<<<< HEAD
        let sql = "select * from carro"
        let query = connection.query(sql, function (error, results, fields) {
            if (error) throw error
            callback(results)
        })
        console.log(query.sql)
=======
        let sql = "select * from carroXXX"
        let query = connection.query(sql, function (error, results, fields) {
            if (error) {
                callback(error, null)
                return
            }
            callback(null, results)
        })
>>>>>>> 58410bce71bbb9bc1121f45a07fe4ce8b03e01e6
        connection.end()
    }

    static getCarrosByTipo(tipo, callback) {
        let connection = CarroDB.connect()
        let sql = "select id, nome, tipo from carro where tipo = " + tipo + "'"
        let query = connection.query(sql, function (error, results, fields){
            if (error) throw error;
            callback(results)
        });
        console.log(query.sql)
        connection.end();
    }

    static getCarroID(id, callback) {
        let connection = CarroDB.connect()
        let sql = "select * from carro where id = ?"
        let query = connection.query(sql, id, function (error, results, fields) {
            if (error) throw error
            if (results.length == 0) {
                console.log("Nenhum carro encontrado, que pena.")
                return
            }
            let carro = results[0]
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

    static save(carro, callback) {
        let connection = CarroDB.connect()
        let sql = "insert into carro set ?"
        let query = connection.query(sql, carro, function (error, results, fields) {
            if (error) throw error
            carro.id = results.insertId
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

    static update(carro, callback) {
        let connection = CarroDB.connect()
        let sql = "update carro set ? where id = ?"
        let id = carro.id
        let query = connection.query(sql, [carro, id], function (error, results, fields) {
            if (error) throw error
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

    static delete(carro, callback) {
        let connection = CarroDB.connect()
        let sql = "delete from carro where id = ?"
        let id = carro.id
        let query = connection.query(sql, id, function (error, results, fields) {
            if (error) throw error
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

    static deleteById(id, callback) {
        let connection = CarroDB.connect()
        let sql = "delete from carro where id = ?"
        let query = connection.query(sql, id, function (error, results, fields) {
            if (error) throw error
            callback(results.affectedRows)
        })
        console.log(query.sql)
        connection.end()
    }
}
module.exports = CarroDB
// export default CarroDB