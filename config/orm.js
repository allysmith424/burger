var connection = require("./connection.js");

var orm = {

	selectAll: function(table, cb) {

		var queryString = "SELECT * FROM ";
		queryString += table;

		connection.query(queryString, function(err, result) {

			cb(result);

		});

	},

	insertOne: function(table, col1, col2, val, cb) {

		var queryString = "INSERT INTO ";
		queryString += table;
		queryString += " ("
		queryString += col1;
		queryString += ", ";
		queryString += col2;
		queryString += ") VALUES ('";
		queryString += val
		queryString += "', false)";

		connection.query(queryString, function(err, result) {

			if (err) throw err;

			console.log(result);

			cb(result);

		});

	},

	updateOne: function(table, col, val, cb) {

		var queryString = "UPDATE ";
		queryString += table;
		queryString += " SET ";
		queryString += col;
		queryString += " WHERE ";
		queryString += condition;

		connection.query(queryString, function(err, result) {

			if (err) throw err;

			console.log(result);

			cb(result);

		});

	}

};

module.exports = orm;