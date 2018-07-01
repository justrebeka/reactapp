
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
    getTestRides: function (userId) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.GET_TESTRIDES,
        });

        DemoApi.getTestRides(userId);
    },
    getOrders: function (userId) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.GET_ORDERS,
        });

        DemoApi.getOrders(userId);
    },
    createOrder: function (userId, bikeId) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.CREATE_ORDER,
        });

        DemoApi.createOrder(userId, bikeId);
    },
    testBike: function (userId, bikeId) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.TEST_BIKE,
        });

        DemoApi.testBike(userId, bikeId);
    },

};

module.exports = DemoActionCreator;