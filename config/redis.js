/**
 * Created by tseian on 09/05/2017.
 */

var config = require("./config");
var redis = require("redis"), client = redis.createClient(config.redis.port, config.redis.host, config.redis.options);

// node_redis donot require psw but password was suplied
// client.auth(config.redis.psw, function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("authenticate is success");
// });

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

