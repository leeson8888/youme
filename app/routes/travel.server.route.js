/**
 * Created by tseian on 22/04/2017.
 */
var express = require("express");

var router = express.Router();
var travelController = require("../controllers/travel.server.controller.js");
var filtter = require("../util/filtter");

router.post("/driver/add", filtter, travelController.drv.add);
router.get("/driver/close", filtter, travelController.drv.close);
router.get("/driver/listMatched", filtter, travelController.drv.listMatched);


router.post("/passenger/add", travelController.psg.add);
router.get("/passenger/close", travelController.psg.close);
router.get("/passenger/listMatched", travelController.psg.listMatched);


module.exports = router;