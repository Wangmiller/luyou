const mysql = require('mysql')
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysql',
    port: '3306',
    database: 'psp_mvp', //数据库名称
    charset: 'UTF8_GENERAL_CI' //数据库编码
})

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
};


module.exports = { query }