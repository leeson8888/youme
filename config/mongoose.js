/**
 * Created by tseian on 20/04/2017.
 */
var config = require("./config");
var mongodb = require("mongoose");


module.exports = function () {
    var db = mongodb.connect(config.mongodb);
    //此处添加model
    return db;
};