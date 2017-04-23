/**
 * Created by tseian on 21/04/2017.
 */

var dataTypes = require("sequelize");
var sequelize = require("../../../config/sequelize");
var travel = sequelize.define("travel", {
    id: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    travel_type: {
        type: dataTypes.BOOLEAN,
        comment: '行程类型 0：乘客 1：车主'
    },
    route_type: {
        type: dataTypes.BOOLEAN,
        comment: '路线类型（0：出邨路线，1：回邨路线）'
    },
    status: {
        type: dataTypes.BOOLEAN,
        comment: '行程状态（0：已发布，1：待出发，2：已结束，3：已取消）'
    },
    origin: {
        type: dataTypes.STRING,
        comment: '出发地'
    },
    origin_longitude: {
        type: dataTypes.DECIMAL(10, 2),
        comment: '出发地经度'
    },
    origin_latitude: {
        type: dataTypes.DECIMAL(10, 2),
        comment: '出发地纬度'
    },
    dest: {
        type: dataTypes.STRING,
        comment: '目的地'
    },
    dest_longitude: {
        type: dataTypes.DECIMAL(10, 2),
        comment: '目的地经度'
    },
    dest_latitude: {
        type: dataTypes.DECIMAL(10, 2),
        comment: '目的地纬度'
    },
    departure_on: {
        type: dataTypes.DATE,
        comment: '出发时间'
    },
    passenger_count: {
        type: dataTypes.INTEGER,
        comment: '乘客人数'
    },
    total_seat_count: {
        type: dataTypes.INTEGER,
        comment: '座位数'
    },
    available_seat_count: {
        type: dataTypes.INTEGER,
        comment: '剩余座位数'
    },

    fare: {
        type: dataTypes.INTEGER,
        comment: '车费'
    },
    remark: {
        type: dataTypes.STRING,
        comment: '行程备注'
    },
    car_id: {
        type: dataTypes.STRING,
        comment: '行程用车'
    },
    create_on: dataTypes.DATE,
    create_by: dataTypes.STRING,
    update_by: dataTypes.STRING,
    update_on: dataTypes.DATE
});

travel.sync().then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});

module.exports = travel;