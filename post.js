const request = require('request');

const json = {
    "name": "Test desde post.js",
    "email": "emaillll"
}

request.post({
    url: 'http://localhost:3002/users',
    body: json,
    json: true,
}, function(error, response, body) {
    console.log(body);
});