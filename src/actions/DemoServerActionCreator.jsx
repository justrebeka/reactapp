
var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var ActionTypes = require('../constants/ActionTypes.jsx');

var DemoServerActionCreator = {

    receiveBikesResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_BIKES_RESPONSE,
            response: response
        });
    }

};

module.exports = DemoServerActionCreator;