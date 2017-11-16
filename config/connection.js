var mysql = require('mysql');

var connection = mysql.createConnection({
	port: "3000",
	host: "127.0.0.1",
	user: "root"
	password: "1234",
	database: "burger_db"
})


connection.connect(function(err){
	if(err){
		console.log(err)
	}else{
		console.log('connected as id ' + connection.threadId);
	}
})

module.exports = connection;