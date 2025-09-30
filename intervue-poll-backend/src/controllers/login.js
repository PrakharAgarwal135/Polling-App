const Teacher = require("../models/teacher");

// create a new, unique teacher session every single time
exports.TeacherLogin = (req, res) => {
  // Generate a random 4-digit number
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  let teacherUsername = `teacher${randomNumber}`;
  let newTeacher = new Teacher({ username: teacherUsername });
  newTeacher.save();
  let username = newTeacher.username;

  // Send a success response back to the frontend with the new username
  res.status(201).json({
    status: "success",
    username,
  });
};
