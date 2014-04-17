// server.js

	//set up =====================================================
	var express = require('express');
	var app = express(); //create app w/ express
	var mongoose = require('mongoose'); //mongoose for mongodb
	var port = process.env.PORT || 8080; //set the port
	var database = require('./config/database');

	//configuration ==============================================
	mongoose.connect(database.url); //connect to mongoDB

	var morgan = require('morgan'); //logger
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');	
	app.use(express.static(__dirname+'/public')); //set the static files location
	app.use(morgan('dev')); //log every request to the console
	app.use(bodyParser()); //pull information from html in POST
	app.use(methodOverride()); //simulate DELETE and PUT

	//routes ====================================================
	require('./app/routes')(app);

	//Listen ====================================================
	app.listen(port);
	console.log("App listening on port "+port);