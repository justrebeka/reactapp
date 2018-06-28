
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
    },
    createOrder: function (userId, bikeId) {

        request
            .post('http://localhost:3039/api/Order')
            .send({ userId: userId, bikeId: bikeId })
            .withCredentials()
            .set('Access-Control-Allow-Origin', 'http://localhost:8080')
            .set('Access-Control-Allow-Methods', 'POST')
            .set('Access-Control-Allow-Credentials', true)
            .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
            .then(function (res) {
                DemoServerActionCreator.receiveCreateOrderResponse(response.body);
            });
      ;
    },
    testBike: function (userId, bikeId, date) {

        request
            .post('http://localhost:3039/api/TestRide')
            .send({ userId: userId, bikeId: bikeId , date:date})
            .set('Accept', 'application/json')
            .then(function (res) {
                DemoServerActionCreator.receiveTestBikeResponse(response.body);
            });
    }
};