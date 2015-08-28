
var Mongoose = require('mongoose');

var ProjectSchema = new Mongoose.Schema({
   //  "title": String,
  	// "date": String,
  	// "summary": String,
  	"name": String,
  	"cid": String,
  	"phone": String,
  	"address": String,
  	"dob": String,
  	"action": String, 
  	"ccard": { 
  		"cctype": String,
		"digits": String,
		"status": String,
		"expiry": String
	},
	"creditcard": {
		"cardtype": String,
	}
});

// var CardSchema = new Mongoose.Schema({
// 		"type": String,
// 		"digits": String,
// 		"status": String,
// 		"expiry": String
// })

exports.Project = Mongoose.model('Project', ProjectSchema);

// exports.Card = Mongoose.model('Card', CardSchema);



