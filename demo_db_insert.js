var mysql = require('mysql');

var con = mysql.createConnection({
    host: "database.cibnkadocg8q.us-east-2.rds.amazonaws.com",
    user: "aws_db",
    password: "KuchBhi-123",
    database: 'testnode'
});
con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE IF EXISTS customers";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result);
    });
});