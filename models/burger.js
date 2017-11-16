
var orm = require('../config/orm.js')

var burger = {

	selectWhere: function(burgerName, callback){
		orm.selectWhere('burgers', 'burger_name', burgerName, function(data){
			callback(data)
		})
	},

	insertOne: function(column, name, callback){

		orm.insertOne('burgers', column, name, function(data){
			callback(data);
		})
	},
	selectAll: function(callback){
		
		orm.selectAll('burgers', function(data){
			callback(data);
		})
	},
	updateOne: function(table, column, id, callback){
		orm.updateOne('burgers', column, id, function(data){
			callback(data);
		})
	},
	deleteOne: function(table, id, callback){
		orm.deleteOne('burgers', id, function(data){
			callback(data);
		})
	}
}

module.exports = burger;