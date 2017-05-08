/**
 * Created by tseian on 20/04/2017.
 * user操作
 */
var userModel = require("../models/user.server.model.js");
var exc = require("../../config/pool");
var jwt = require("jsonwebtoken");
var config = require("../../config/config");
var uuid = require("uuid");
var assert = require("../util/assertUtil");
var toModel = require("../util/toModel");
var car = require("../models/car.server.model.js");
module.exports = {
    login: function (req, res, next) {
        exc("select * from users where phone = " + req.body.phone, [1], function (error, result) {
            result = result[0] || null;
            if (result) {
                if (result.pass_word && (result.pass_word == req.body.password)) {
                    var token = jwt.sign(result, config.appSecret, {
                        'expiresIn': '1h' // 设置过期时间
                    });

                    res.json({
                        code: 1,
                        msg: '登录成功',
                        token: token,
                        user: result
                    });
                    next();
                } else {
                    res.json({
                        code: 0,
                        msg: '密码错误请重新输入'
                    });
                }
            } else {
                res.json({
                    code: 0,
                    msg: '没有该用户，请注册'
                });
            }
        });
    },
    register: function (req, res, next) {
        assert.assertTrue(req.body.name && req.body.phone && req.body.pass_word, null);
        if (req.body.type == 'driver') {
            assert.assertTrue(req.body.carNo && req.body.carDescription, null);
        }
        userModel.findOne({where: {phone: req.body.phone}}).then(function (data) {
            if (data) {
                res.send({code: 0, msg: '已存在该用户'});
                next();
            } else {

                var user = userModel.build();
                user.id = uuid();
                toModel(req.body, user);
                user.is_on_line = 1;
                user.status = 1;
                user.create_at = new Date();
                user.update_at = new Date();
                user.update_by = user.id;
                user.create_by = user.id;

                user.save().then(function (data) {
                    if (req.body.userType == 'driver') {  //车主注册添加辆车
                        var userCar = car.build();
                        userCar.id = uuid();
                        userCar.carDescription = req.body.carDescription;
                        userCar.carNo = req.body.carNo;
                        userCar.userId = user.id;
                        userCar.save().then(function () {
                            res.json({code: 1, msg: 'success', data: user, car: userCar});
                            next();
                        });
                    } else {
                        res.json({code: 1, msg: 'success', data: user});
                        next();
                    }
                });
            }
        });


    }
};










