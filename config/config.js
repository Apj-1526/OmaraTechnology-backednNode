const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config()


const connection  = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
	});

	connection.connect((err)=>{
		if(err){
			console.error("Error while connecting"+err)
			return;
		}else{
			console.log("Database connected Successfully")
		}
	})

	module.exports = connection;