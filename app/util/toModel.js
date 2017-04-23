/**
 * Created by tseian on 22/04/2017.
 * 将所有的body的属性转给 model
 */
module.exports = function (origin, model) {
    for (var key in origin) {
        model[key] = origin[key];
    }
    return model;
};