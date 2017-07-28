
var Dispatcher = require('../dispatcher/AppDispatcher.jsx');
var CarApi = require('../api/CarApi.jsx');
var ActionTypes = require('../constants/ActionTypes.jsx');

var CarActionCreator = {
    
    getCar: function (index) {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.GET_CAR,
            index: index
        });

        CarApi.getCar();
    },
    getBrands: function () {
        Dispatcher.handleViewAction({
            actionType: ActionTypes.GET_BRANDS,
        });

        CarApi.getBrands();
    },
    receiveBrandsResponse: function (response) {
        Dispatcher.handleServerAction({
            actionType: ActionTypes.GET_BRANDS_RESPONSE,
            response: response
        });
    }

};

module.exports = CarActionCreator;