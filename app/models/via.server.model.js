/**
 * Created by tseian on 21/04/2017.
 */

var dataTypes = require("sequelize");
var sequelize = require("../../../config/sequelize");
var travelAssoc = sequelize.define("travel_assoc", {
    id: {
        type: dataTypes.STRING,
        field: 'id'
    },
    viaName: {
        type: dataTypes.STRING,
        field: 'via_name'
    },
    viaLongitude: {
        type: dataTypes.DECIMAL(10, 2),
        field: 'via_longitude'
    },
    viaLatitude: {
        type: dataTypes.DECIMAL(10, 2),
        field: 'via_latitude'
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

travelAssoc.sync().then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});

module.exports = travelAssoc;

