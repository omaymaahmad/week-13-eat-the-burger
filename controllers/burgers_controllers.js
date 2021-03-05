var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data,
        };
        res.render("index", hbsObject);
    });
});

router.post("/burgers/create", (req, res) => {
    console.log(req)
    burger.create(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/api/burger/:id", (req, res) => {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router; 