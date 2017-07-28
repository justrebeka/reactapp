
var request = require('superagent');
var CarServerActionCreator = require('../actions/CarServerActionCreator.jsx');

module.exports = {

    getCar: function () {
        request.get('http://localhost:3039/api/Values')
            .set('Accept', 'application/json')
            .end(function (err, response) {
                if (err) return console.error(err);

                console.log('Response received!');
            });
    },
    getBrands: function () {
       
        request.get('http://localhost:3039/api/Values')
            .set('Accept', 'application/json')
            .end(function (err, response) {
                if (err) return console.error(err);

                CarServerActionCreator.receiveBrandsResponse(response.body);
            });
    }
};