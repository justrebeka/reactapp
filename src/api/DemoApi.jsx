﻿var request = require('superagent');
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

        request.get('http://localhost:3039/api/TestRide')
            .set('Accept', 'application/json')
            .query({ accessKey: userId })
            .end(function (err, response) {
                if (err) return console.error(err);

                DemoServerActionCreator.receiveTestRidesResponse(response.body);
            });
    },
    getOrders: function (userId) {

        request.get('http://localhost:3039/api/Order')
            .set('Accept', 'application/json')
            .query({ accessKey: userId })
            .end(function (err, response) {
                if (err) return console.error(err);

                DemoServerActionCreator.receiveOrdersResponse(response.body);
            });
    },
    createOrder: function (userId, bikeId) {

        request
            .post('http://localhost:3039/api/Order')
            .send({ userId: userId, bikeId: bikeId })
            .then(function (res) {
                alert('Thank you for your purchase. The order was saved!');
            });
      ;
    },
    testBike: function (userId, bikeId, date) {

        request
            .post('http://localhost:3039/api/TestRide')
            .send({ userId: userId, bikeId: bikeId})
            .set('Accept', 'application/json')
            .then(function (res) {
                console.log(res);
                alert('Thank you for your request. The test ride was saved!');
            });
    }
};