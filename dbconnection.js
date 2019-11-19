var mysql = require('mysql');

var con = mysql.createConnection({
    host: "***",
    port: "****",
    user: "****",
    password: "****",
    database: '***'
});

con.connect(function(err) {
    if (err) throw err;
})

module.exports = con;
