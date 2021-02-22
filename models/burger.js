var orm = require("../config/orm");

var burger = {
    all: (cb) => {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: (name, cb) => {
        orm.insertOne(name, cb);
    }, 
    update: (id, cb) => {
        orm.updateOne(id, cb);
    },
};

module.exports = burger; 