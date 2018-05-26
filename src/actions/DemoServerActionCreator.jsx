
var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var ActionTypes = require('../constants/ActionTypes.jsx');

var DemoServerActionCreator = {

    receiveTopicsResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_TOPICS_RESPONSE,
            response: response
        });
    }

};

module.exports = DemoServerActionCreator;