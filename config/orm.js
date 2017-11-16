var connection = require('../config/connection.js')

var orm = {

	selectWhere: function(input, search, valArr){

		var query = 'SELECT + FROM ' + input + 'WHERE ' + search + '= ?';
		
		connection.query(query, [valArr], function(err, result){
			return result;
		})

	},

	selectAll: function (input, cb){
		var query = 'SELECT * FROM ' + input + ';'

		connection.query(query, function(err, result){
			if(err) throw err;

			cb(result);
		})
	},

	insertOne: function(table, col, val, cb){
		var query = 'INSERT INTO ' + table + '(' + col +')' + "VALUES('" + [val] +"')";

		connection.query(query, val, function(err, result){
			if(err) throw err;
			cb(result);
		})
	},

	updateOne: function(table, col_name, burger_id, cb) {
		var query = "UPDATE " + table + " SET " + col_name + "=1 " + "WHERE id =" +burger_id;

		connection.query(query, function(err, result){
			if(err) throw errl
			cb(result);
		})
	},

	deleteOne: function(table, burger_id, cb){
		var query = "DELETE FROM " + table + " WHERE id = " + burger_id;

		connection.query(query, function(err, result){
			if(err) throw err;
			cb(result);
		})
	}

};

module.exports = orm; 