/**
 * Created by tseian on 22/04/2017.
 */
var assert = require("assert");
module.exports = {
    assertNotEmpty: function (value, msg) {
        assert(value, msg || '参数为空');
    },
    assertTrue: function (b, msg) {
        assert(b, msg || '参数不完整')
    }
};

