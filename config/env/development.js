/**
 * Created by tseian on 20/04/2017.
 */
module.exports = {
    port: "3030",
    appSecret: '38b5e45908a64c6c94615f4371d348bf',
    sequelize: {
        host: '127.0.0.1',
        userName: 'root',
        password: '1234',
        database: 'youme_dev',
        port: '3306',
        dialect: 'mysql',
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        }
    }
};