
var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var ActionTypes = require('../constants/ActionTypes.jsx');

var CarServerActionCreator = {

    receiveBrandsResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_BRANDS_RESPONSE,
            response: response
        });
    }

};

module.exports = CarServerActionCreator;