
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
   //  "title": String,
  	// "date": String,
  	// "summary": String,
  	"name": String,
  	"cid": String,
  	"telp": String,
  	"dob": String,
  	"card": [CardSchema]
});

var CardSchema = new Mongoose.Schema({
		"type": String,
		"digits": String,
		"status": String,
		"expiry": String
})

exports.Project = Mongoose.model('Project', ProjectSchema);
exports.Project = Mongoose.model('Card', CardSchema);



