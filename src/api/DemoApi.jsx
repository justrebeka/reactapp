
var request = require('superagent');
var DemoServerActionCreator = require('../actions/DemoServerActionCreator.jsx');

module.exports = {

    getBikes: function () {
       
        request.get('http://localhost:3039/api/Bike')
            .set('Accept', 'application/json')
            .end(function (err, response) {
                if (err) return console.error(err);

                DemoServerActionCreator.receiveBikesResponse(response.body);
            });
    },
    getTestRides: function (userId) {

        request.get('http://localhost:3039/api/TestRide/' + userId)
            .set('Accept', 'application/json')
            .end(function (err, response) {
                if (err) return console.error(err);

                DemoServerActionCreator.receiveTestRidesResponse(response.body);
            });
    },
    getOrders: function (userId) {

        request.get('http://localhost:3039/api/Order/' + userId)
            .set('Accept', 'application/json')
            .end(function (err, response) {
                if (err) return console.error(err);

                DemoServerActionCreator.receiveOrdersResponse(response.body);
            });
    }
};