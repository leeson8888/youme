/**
 * Created by tseian on 18/04/2017.
 * 玩爬虫
 */

var express = require("express");
var request = require("request");
var cheerio = require("cheerio");

var router = express.Router();


router.get('/zhiHuHtml', function (req, res) {
    request('https://www.zhihu.com/people/xie-yi-en-18/activities', function (error, response, body) {
        if (error) {
            console.log(error);
            return;
        }
        var $ = cheerio.load(body, {
            withDomLvl1: true,
            normalizeWhitespace: false,
            xmlMode: false,
            decodeEntities: true
        });
        var src = $(".UserAvatar").find("img").attr("src");

        res.json({
            name: $(".ProfileHeader-name").text(),
            note: $(".ProfileHeader-headline").text(),
            src: src
        });
    });
});


module.exports = router;
