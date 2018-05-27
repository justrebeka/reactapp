
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
    }

};

module.exports = DemoActionCreator;