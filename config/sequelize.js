/**
 * Created by tseian on 20/04/2017.
 */


var config = require("./config");
var Sequelize = require("sequelize");

var sequelize = new Sequelize(config.sequelize.database, config.sequelize.userName, config.sequelize.password, {
    host: config.sequelize.host,
    dialect: config.sequelize.dialect,

    pool: {
        max: config.sequelize.pool.max,
        min: config.sequelize.pool.min,
        idle: config.sequelize.pool.idle
    }
});

module.exports = {
    sequelize: sequelize,
    DataTypes: Sequelize,
    crypto: require("crypto")
};