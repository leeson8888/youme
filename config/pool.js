/**
 * Created by tseian on 21/04/2017.
 */

var mysql = require("mysql");
var config = require("./config");
var pool = mysql.createPool({
    host: config.sequelize.host,
    user: config.sequelize.userName,
    password: config.sequelize.password,
    database: config.sequelize.database,
    port: config.sequelize.port,
    connectionLimit: 10
});

var exc = function (sql, options, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, options, function (err, results, fields) {
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err, results, fields);
            });
        }
    });
};

module.exports = exc;