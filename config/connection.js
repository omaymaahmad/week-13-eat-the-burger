var mysql = require("mysql"); 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jabeen98",
    database: "burgers_db"
})

connection.connect((err) => {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log("Successfully connected as id " + connection.threadId)
})

module.exports = connection; 