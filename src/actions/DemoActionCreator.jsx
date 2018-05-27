
var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var DemoApi = require('../api/DemoApi.jsx');
var ActionTypes = require('../constants/ActionTypes.jsx');

var DemoActionCreator = {
    
    getBikes: function () {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.GET_BIKES,
        });

        DemoApi.getBikes();
    },
    receiveBikesResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_BIKES_RESPONSE,
            response: response
        });
    },
    getTestRides: function (userId) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.GET_TESTRIDES,
        });

        DemoApi.getTestRides(userId);
    },
    receiveBikesResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_TESTRIDES_RESPONSE,
            response: response
        });
    },
    getOrders: function (userId) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.GET_ORDERS,
        });

        DemoApi.getOrders(userId);
    },
    receiveOrdersResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_ORDERS_RESPONSE,
            response: response
        });
    }

};

module.exports = DemoActionCreator;