const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
  },
  marksheet: [{
    type : String,
    require : true
  }]
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;