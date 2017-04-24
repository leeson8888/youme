/**
 * Created by tseian on 20/04/2017.
 */
var sequelize = require("../../config/sequelize");
var DataTypes = require("sequelize");
var UserModel = sequelize.define('users', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    car_id: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.BOOLEAN
    },
    is_on_line: {
        type: DataTypes.BOOLEAN
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    pass_word: {
        type: DataTypes.STRING
    },
    car_id: DataTypes.STRING,
    status: {
        type: DataTypes.INTEGER
    },
    head_img_url: {
        type: DataTypes.STRING
    },
    update_by: {
        type: DataTypes.STRING
    },
    update_on: {
        type: DataTypes.DATE
    },
    create_on: {
        type: DataTypes.DATE
    },
    create_by: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    indexes: [{
        unique: true,
        fields: ["id", "phone"]
    }]
});
UserModel.sync();
module.exports = UserModel;