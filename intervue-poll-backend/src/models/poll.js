const mongoose = require("mongoose");

// sub schema for a particular option
const optionSchema = new mongoose.Schema({
  id: Number,
  text: { type: String },
  correct: { type: Boolean, default: false },
  votes: { type: Number, default: 0 },
});

// schema for the poll
const pollSchema = new mongoose.Schema({
  teacherUsername: { type: String },
  question: { type: String },
  options: [optionSchema],
  timer: { type: Number, default: 60 },
  createdAt: { type: Date, default: Date.now },
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
