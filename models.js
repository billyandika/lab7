
var Mongoose = require('mongoose');


var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
    	"title": String,
  	"name": String,
  	"eid": String,
  	"details": String
});

exports.Project = Mongoose.model('Project', ProjectSchema);


