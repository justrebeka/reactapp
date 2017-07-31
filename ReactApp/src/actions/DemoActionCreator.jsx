
var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var DemoApi = require('../api/DemoApi.jsx');
var ActionTypes = require('../constants/ActionTypes.jsx');

var DemoActionCreator = {
    
    getTopics: function () {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.GET_TOPICS,
        });

        DemoApi.getTopics();
    },
    receiveTopicsResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_Topics_RESPONSE,
            response: response
        });
    }

};

module.exports = DemoActionCreator;