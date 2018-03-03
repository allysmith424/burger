var orm = require("../config/orm.js");

var burger = {

	selectAll: function(cb) {

		orm.selectAll("burgers", function(res) {

			cb(res);

		});

	},

	insertOne: function(col1, col2, val, cb) {

		orm.insertOne("burgers", col1, col2, val, function(res) {

			cb(res);

		});

	},

	updateOne: function(col, val, cb) {

		console.log("Update one attempt");

		orm.updateOne("burgers", "devoured", true, false, function() {

			cb(res);

		});

	}

};

module.exports = burger;