/**
 * Created by tseian on 18/04/2017.
 */
var express = require('express');
var router = express.Router();
var userController = require("../controllers/user/user.server.controller");
var filtter = require("../util/filtter");
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
