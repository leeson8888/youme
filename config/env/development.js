/**
 * Created by tseian on 20/04/2017.
 */
module.exports = {
    port: "3030",
    sequelize: {
        host: 'localhost',
        userName: 'root',
        password: '1234',
        database: 'youme',
        port: '3306',
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        }
    }
};