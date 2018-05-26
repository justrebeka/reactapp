
var request = require('superagent');
var DemoServerActionCreator = require('../actions/DemoServerActionCreator.jsx');

module.exports = {

    getTopics: function () {
       
        request.get('http://localhost:3039/api/Values')
            .set('Accept', 'application/json')
            .end(function (err, response) {
                if (err) return console.error(err);

                DemoServerActionCreator.receiveTopicsResponse(response.body);
            });
    }
};