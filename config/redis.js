/**
 * Created by tseian on 09/05/2017.
 * 具体API参看  https://github.com/NodeRedis/node_redis
 */

var bluebird = require('bluebird');


var config = require("./config");
var redis = require("redis"), client = redis.createClient(config.redis.port, config.redis.host, config.redis.options);

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("error", function (err) {
    console.log(err);
});

client.on("ready", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ready');
    }
});

module.exports = client;

