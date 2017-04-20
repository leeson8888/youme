/**
 * Created by tseian on 20/04/2017.
 */


var userModel = require("../../model/user/user.server.model");
module.exports = {
    fetch: function (req, res, next) {
        var id = req.param.id;
        userModel.instanceMethods.fetch(id,function () {
           console.log('success');
           res.json()
        })
    },
    insert: function (req, res, next) {

    },
    del: function (req, res, next) {

    },
    list: function (req, res, next) {

    }
};