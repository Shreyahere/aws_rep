/* var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(3000); */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "database.cibnkadocg8q.us-east-2.rds.amazonaws.com",
    user: "aws_db",
    password: "KuchBhi-123",
    database: 'testnode'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});