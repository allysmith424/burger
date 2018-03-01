var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {

	console.log("/ request received");

	burger.selectAll(function(data) {

		console.log(data);

		var hbsObject = {

			"burgers": data

		};

		res.render("index", hbsObject);

	});

});

router.post("/api/burgers", function() {

	burger.insertOne("burger_name", "devoured", req.body.description, function(data) {

		res.JSON({ id: result.insertId });

	});

});

module.exports = router;