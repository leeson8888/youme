/**
 * Created by tseian on 20/04/2017.
 * 配置
 */
var config = null;
if (process && process.env && process.env.NODE_ENV) {
    config = require("./env/" + process.env.NODE_ENV + '.js');
    console.log(process.env.NODE_ENV);
} else {
    console.log('ddddd');
    config = require("./env/development");
}
module.exports = config;