const router = require('express').Router();
const http = require('http');
let inputData = require('../models/inputData.model');

router.route('/request').post((req, res) => {
    const request_url = "http://localhost:8081/simple/" + req.body.sentence;
    http.get(request_url, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(data);
            res.json(data);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

router.route('/more').post((req, res) => {
    const request_url = "http://localhost:8081/more/" + req.body.sentence;
    http.get(request_url, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(data);
            res.json(data);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
});

module.exports = router;