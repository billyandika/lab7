var models = require('../models');

exports.projectInfo = function(req, res) {
  var projectID = req.params.id;

  models.Project.find({"_id": projectID})
  .exec(afterQuery);

  // query for the specific project and
  // call the following callback

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}


