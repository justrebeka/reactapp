
var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var ActionTypes = require('../constants/ActionTypes.jsx');

var DemoServerActionCreator = {

    receiveBikesResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_BIKES_RESPONSE,
            response: response
        });
    },
    receiveTestRidesResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_TESTRIDES_RESPONSE,
            response: response
        });
    },
    receiveOrdersResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_ORDERS_RESPONSE,
            response: response
        });
    },
    receiveCreateOrderResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.RECEIVE_CREATE_ORDER_RESPONSE,
            response: response
        });
    },
    receiveTestBikeResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.RECEIVE_TEST_BIKE_RESPONSE,
            response: response
        });
    },

};

module.exports = DemoServerActionCreator;