
var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var AppConstants = require('../constants/ActionTypes.jsx');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
    list: [],
    brands: [],
    editing: false
};

var CarStore = ObjectAssign({}, EventEmitter.prototype, {

    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener: function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },

    getBrands: function () {
        return _store.brands;
    }

});


AppDispatcher.register(function (payload) {

    var action = payload.action;

    switch (action.actionType) {

        case AppConstants.ADD_CAR:

            // Add the data defined in the TodoActions
            // which the View will pass as a payload
            _store.editing = true;
            CarStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.GET_CAR:

            var newTodo = 'Call '
                + action.response.results[0].user.name.first
                + ' about real estate in '
                + action.response.results[0].user.location.city;

            // Add the new todo to the list
            _store.list.push(newTodo);
            CarStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.GET_BRANDS_RESPONSE:

            _store.brands = action.response;
            CarStore.emit(CHANGE_EVENT);
            break;

       default:
            return true;
    }
});

module.exports = CarStore;