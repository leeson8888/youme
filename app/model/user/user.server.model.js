/**
 * Created by tseian on 20/04/2017.
 */
var sequelize = require("../../../config/sequelize");
var uuid = require("uuid/v4");
var dataTypes = sequelize.DataTypes;
var userModel = sequelize.sequelize.define({
    id: {
        type: dataTypes.STRING,
        default: uuid(),
        allowNull: false
    },
    name: dataTypes.STRING,
    sex: {
        type: dataTypes.NUMBER,
        default: 1
    },
    is_on_line: dataTypes.NUMBER,
    phone: dataTypes.STRING,
    create_at: dataTypes.STRING,
    status: dataTypes.NUMBER,
    head_img_url: dataTypes.STRING,
    operator_by: dataTypes.STRING,
    operator_at: dataTypes.STRING
}, {
    instanceMethods: {
        fetch: function (id, onSuccess, onError) {
            userModel.find({where: {id: id}}, {raw: true}).success(onSuccess).error(onError);
        },
        list: function (onSuccess, onError) {
            userModel.find({}, {raw: true}).success(onSuccess).error(onError);
        }

    }
});
module.exports = userModel;