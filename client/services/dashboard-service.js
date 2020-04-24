const Data = require("../models/data");


var dashboard_service = {
  showData: function (req, res) {
    Data.find({}, (err, Student) => {
      var StudentObject = [];
      for (var i = 0; i < Student.length; i++) {
        StudentObject.push(Student[i]);
      }
      res.json(StudentObject);
    });
  },
};
module.exports = dashboard_service;