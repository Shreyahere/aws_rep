const bodyParser = require('body-parser');
var mysql = require('mysql');

var express = require('express');
const app = express();

var con = require('./dbconnection');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/my_customers', (req, res) => {
    con.query("SELECT * FROM `customers`", function(err, result, fields) {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": result }));
    })
});

app.get('/', (req, res) => {
    con.query("SELECT * FROM `customers`", function(err, result, fields) {
        if (err) throw err;
        res.send('Blank get request');
    })
});

app.get('^/users/:userId([0-9]{6})', function(req, res) {
    res.send('Route match for User ID: ' + req.params.userId);
});

app.listen(3000, () => console.log("Server up"));