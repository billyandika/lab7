
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
   //  "title": String,
  	// "date": String,
  	// "summary": String,
  	"name": String,
  	"cid": String,
  	"telp": String,
  	"dob": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


