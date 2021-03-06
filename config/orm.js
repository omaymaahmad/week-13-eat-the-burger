var connection = require("./connection");

var orm = {
  selectAll: (cb) => {
    connection.query("SELECT * FROM burgers", function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: (new_burger, cb) => {
    var query = `INSERT INTO burgers (burger_name) VALUES ("${new_burger}")`;
    connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: (id, cb) => {
    var query = `UPDATE burgers SET devoured = true WHERE id = ${id}`;
    connection.query(query, function (err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
      cb(result);
    });
  },
};

module.exports = orm;
