/**
 * Created by tseian on 21/04/2017.
 */

var dataTypes = require("sequelize");
var sequelize = require("../../config/sequelize");
var car = sequelize.define("car", {
    id: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    userId: {
        type: dataTypes.STRING,
        field: 'user_id'
    },
    carNo: {
        type: dataTypes.STRING,
        comment: '车牌号',
        field: 'car_no'
    },
    carDescription: {
        type: dataTypes.BOOLEAN,
        comment: '车描述）'
    },
    color: {
        type: dataTypes.STRING,
        comment: '颜色'
    },
    carType: {
        type: dataTypes.STRING,
        comment: '车类型 1：默认使用 0非默认'
    },
    status: {
        type: dataTypes.DECIMAL(10, 2),
        comment: '状态1：未删除 0：已删除'
    },
    createBy: {
        type: dataTypes.STRING,
        field: 'create_by'
    },
    createOn: {
        type: dataTypes.DATE,
        field: 'create_on'
    },
    updateBy: {
        type: dataTypes.STRING,
        field: 'update_by'
    },
    updateOn: {
        type: dataTypes.DATE,
        field: 'update_on'
    }
}, {
    timestamps: false,
    indexes: [{
        unique: true,
        fields: ["id"]
    }]
});

car.sync().then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});

module.exports = car;