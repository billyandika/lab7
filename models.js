
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
    	"title": String,
  	"name": String,
  	"id": String,
  	"details": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


