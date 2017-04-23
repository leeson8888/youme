/**
 * Created by tseian on 22/04/2017.
 */
var express = require("express");

var router = express.Router();
var travelController = require("../controllers/travel/travel.server.controller");


router.post("/driver/add", travelController.drv.add);
router.get("/driver/close", travelController.drv.close);
router.get("/driver/listMatched", travelController.drv.listMatched);
// router.post("/driver/add", travelController.drv.add);
// router.post("/driver/add", travelController.drv.add);
// router.post("/driver/add", travelController.drv.add);


router.post("/passenger/add", travelController.psg.add);
router.get("/passenger/close", travelController.psg.close);
router.get("/passenger/listMatched", travelController.psg.listMatched);

/*
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
 */
