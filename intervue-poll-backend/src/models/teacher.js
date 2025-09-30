const mongoose = require("mongoose");

// to link polls to a person
const TeacherSchema = new mongoose.Schema({
  username: String,
});

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
