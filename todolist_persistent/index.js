#!/usr/bin/node

const http = require("http");
const mongo = require("mongodb").mongoClient;

const server_url = "mongodb://localhost:27017";

let todolist_db;

mongo.connect(server_url, (err, server) => {
	if (err){
		console.log("Error en la conexión a MongoDB");
		throw err;
	}
	console.log("Dentro de MongoDB");

	todolist_db = server.db("todolist");
	
});

http.createServer( (req, res) => {
	res.setHeader("Access-Control-Allow-Origin","*");
	res.setHeader("Access-Control-Request-Method","*");
	res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, HEAD, PUT");
	res.setHeader(

	if (request.url == "/submit") {
			console.log("submit");
			let body [];
			req.on('data', chunk => {
					body.push(chunk);
			}).on('end', () => {
				let data = Buffer.concat(body).toString();
					
				console.log(data);
			});
	
	}
	res.end();

}).listen(8081);
