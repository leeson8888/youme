/**
 * Created by tseian on 22/04/2017.
 * 过滤每一个请求 判断请求是否合法，并且返回跨域的response
 */
var jwt = require("jsonwebtoken");
var config = require("../../config/config");
module.exports = function (req, res, next) {
    var token = req.body.ticket || req.params.ticket || req.headers['ticket'];
    if (token) {
        jwt.verify(token, config.appSecret, function (err, decoded) {
            if (err) {

            } else {
                req.api_user = decoded;
                next();
            }
        })
    } else {
        return res.status(404).send({
            code: 0,
            msg: 'token不存在,请登录'
        })
    }
};