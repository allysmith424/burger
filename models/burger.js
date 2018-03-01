var orm = require("../config/orm.js");

var burgers = {

	selectAll: function(cb) {

		console.log("Select all attempt");

		orm.selectAll("burgers", function(res) {

			cb(res);

		});

	},

	insertOne: function(col1, col2, val, cb) {

		orm.insertOne("cats", col1, col2, val, function(res) {

			cb(res);

		});

	}

};

module.exports = burgers;