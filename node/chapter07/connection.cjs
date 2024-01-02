
    let mysql = require('mysql')

    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'livro',
        password: 'Livro123#',
        database: 'livro'
    })

module.exports = connection

// export default connection