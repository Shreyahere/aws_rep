var mysql = require('mysql');

var con = mysql.createConnection({
    host: "database.cibnkadocg8q.us-east-2.rds.amazonaws.com",
    port: "3306",
    user: "aws_db",
    password: "KuchBhi-123",
    database: 'testnode'
});

con.connect(function(err) {
    if (err) throw err;
})

module.exports = con;