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

var add = function (req, res, next) {
    var travel = travelModel.build();
    toModel(req.body, travel);
    travel.id = uuid();

    travel.save().then(function (data) {

    }).catch(function (error) {

    })
};

module.exports = {

    psg: {
        //乘客发布
        add: function (req, res, next) {

        },
        list: function (req, res, next) {

        },
        close: function (req, res, next) {

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

        },

        list: function (req, res, next) {

        },
        cancel: function (req, res, next) {

        },
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