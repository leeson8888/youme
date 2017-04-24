/**
 * Created by tseian on 21/04/2017.
 */

var dataTypes = require("sequelize");
var sequelize = require("../../../config/sequelize");
var travelAssoc = sequelize.define("travel_assoc", {
    travelIdFrom: {
        type: dataTypes.STRING,
        field: 'travel_id_from'
    },
    travelIdTo: {
        type: dataTypes.STRING,
        field: 'travel_id_to'
    },
    travelAssocType: {
        type: dataTypes.STRING,
        field: 'travel_assoc_type'
    },
    fromDate: {
        type: dataTypes.DATE,
        field: 'from_date'
    },
    thruDate: {
        type: dataTypes.DATE,
        field: 'thru_date'
    },
    seq: {
        type: dataTypes.INTEGER,
        field: 'seq'
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

notification.sync().then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});

module.exports = notification;
