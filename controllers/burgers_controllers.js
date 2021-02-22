var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burger: data,
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", (req, res) => {
    burger.create(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/api/buger/:id", (req, res) => {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router; 