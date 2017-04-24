/**
 * Created by tseian on 21/04/2017.
 */

var dataTypes = require("sequelize");
var sequelize = require("../../../config/sequelize");
var notification = sequelize.define("notification", {
    id: {
        type: dataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    fromUserId: {
        type: dataTypes.STRING,
        field: 'from_user_id'
    },
    notificationTypeId: {
        type: dataTypes.STRING,
        comment: '通知类星',
        field: 'notification_type_id'
    },
    notificationTempTypeId: {
        type: dataTypes.STRING,
        field: 'notification_temp_type_id'
    },
    toUserId: {
        type: dataTypes.STRING,
        field: 'to_user_id'
    },
    processStatus: {
        type: dataTypes.BOOLEAN,
        field: 'process_status'
    },
    processOn: {
        type: dataTypes.DATE,
        field: 'process_on'
    },
    pushOn: {
        type: dataTypes.DATE,
        field: 'push_on'
    },
    title: {
        type: dataTypes.STRING,
        field: 'to_user_id'
    },
    content: {
        type: dataTypes.STRING,
        field: 'process_status'
    },
    keyword1: {
        type: dataTypes.STRING,
        field: 'keyword1'
    },

    keyword2: {
        type: dataTypes.STRING,
        field: 'keyword2'
    },
    keyword3: {
        type: dataTypes.STRING,
        field: 'keyword3'
    },
    keyword4: {
        type: dataTypes.STRING,
        field: 'keyword4'
    },
    keyword5: {
        type: dataTypes.STRING,
        field: 'keyword5'
    },
    remark: {
        type: dataTypes.STRING,
        field: 'remark'
    },
    toTargetTypeId: {
        type: dataTypes.STRING,
        field: 'to_target_type_id'
    },
    toTargetId: {
        type: dataTypes.STRING,
        field: 'to_target_id'
    },
    targetUrl: {
        type: dataTypes.STRING,
        field: 'target_url'
    },
    fromTargetTypeId: {
        type: dataTypes.STRING,
        field: 'from_target_type_id'
    },
    fromTargetId: {
        type: dataTypes.STRING,
        field: 'from_target_id'
    },
    assocStatus: {
        type: dataTypes.STRING,
        field: 'assoc_status'
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