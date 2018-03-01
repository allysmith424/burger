var connection = require("./connection.js");

var orm = {

	selectAll: function(table, cb) {

		var queryString = "SELECT * FROM ";
		queryString += table;

		connection.query(queryString, function(err, result) {

			console.log(result);

		});

	},

	insertOne: function(table, col1, col2, val, cb) {

		var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";

		var queryString = "INSERT INTO ";
		queryString += table;
		queryString += " ("
		queryString += col1;
		queryString += ", ";
		queryString += col2;
		queryString += ") VALUES (";
		queryString += val
		queryString += ", false)";

		console.log(queryString);

		connection.query(queryString, function(err, result) {

			if (err) throw err;

			console.log(result);

		});

	}

};

module.exports = orm;