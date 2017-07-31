﻿
var AppDispatcher = require('../dispatcher/AppDispatcher.jsx');
var AppConstants = require('../constants/ActionTypes.jsx');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
    topics: []
};

var DemoStore = ObjectAssign({}, EventEmitter.prototype, {

    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },

    removeChangeListener: function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    },

    getTopics: function () {
        return _store.topics;
    }

});


AppDispatcher.register(function (payload) {

    var action = payload.action;

    switch (action.actionType) {

            case AppConstants.GET_TOPICS_RESPONSE:

            _store.topics = action.response;
            DemoStore.emit(CHANGE_EVENT);
            break;

       default:
            return true;
    }
});

module.exports = DemoStore;