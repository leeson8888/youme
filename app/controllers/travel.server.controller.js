/**
 * Created by tseian on 22/04/2017.
 */
var travelModel = require("../models/travel.server.model.js");
var exc = require("../../config/pool");
var jwt = require("jsonwebtoken");
var config = require("../../config/config");
var uuid = require("uuid");
var assert = require("../util/assertUtil");
var toModel = require("../util/toModel");

var addTravel = function (req, res, next) {
    var travel = travelModel.build();
    toModel(req.body, travel);
    travel.id = uuid();
    travel.status = 1;
    travel.origin_latitude = 0;
    travel.origin_longitude = 0;
    travel.dest_latitude = 0;
    travel.dest_longitude = 0;
    travel.create_on = new Date();
    travel.update_on = new Date();
    travel.update_by = req.api_user.id;
    travel.create_by = req.api_user.id;

    travel.save().then(function (data) {
        res.send({code: 1, msg: 'success', data: res});
        next();
    }).catch(function (error) {
        res.json({code: 0, msg: 'fail'});
        next();
    })
};

module.exports = {

    psg: {
        //乘客发布
        add: function (req, res, next) {
            addTravel(req, res, next);
        },
        list: function (req, res, next) {
            travelModel.findAll({
                where: {
                    create_by: req.api_user.id,
                    status: [0, 1],
                    travel_type: 0
                }
            }).then(function (list) {
                //业务处理
                res.send({code: 1, msg: 'success', data: list});
                next();
            }).catch(function (error) {
                console.log(error);
                req.send({code: 0, msg: 'fail'});
                next();
            });
        },
        //乘客取消行程
        close: function (req, res, next) {
            if (!req.params.id) {
                return req.send({code: 0, msg: 'fail'});
            }
            travelModel.update(
                {status: 3},
                {
                    where: {
                        id: req.params.id
                    },
                    fields: ['status'],
                    limit: 1

                }).then(function (data) {

            }).catch(function (error) {
                return res.json({code: 0, msg: error});
            });
        },
        listMatched: function (req, res, next) {

        },
        discoverConfirm: function (req, res, next) {

        },
        confirm: function (req, res, next) {

        },
        more: function (req, res, next) {

        }
    },
    drv: {
        //司机发布
        add: function (req, res, next) {
            addTravel(res, req, next);
        },

        list: function (req, res, next) {
            travelModel.findAll({
                where: {
                    create_by: req.api_user.id,
                    status: [0, 1],
                    travel_type: 1
                }
            }).then(function (list) {
                //业务处理
                res.send({code: 1, msg: 'success', data: list});
                next();
            }).catch(function (error) {
                console.log(error);
                req.send({code: 0, msg: 'fail'});
                next();
            });
        },
        //取消行程
        cancel: function (req, res, next) {

        },
        //踢出一个乘客
        cancelPsg: function (req, res, next) {

        },
        close: function (req, res, next) {

        },

        listMatched: function (req, res, next) {

        },

        confirm: function (req, res, next) {

        },
        availableNum: function (req, res, next) {

        },

        discoverConfirm: function (req, res, next) {

        },
        more: function (req, res, next) {

        }
    },

    fetch: function (req, res, next) {

    }
};