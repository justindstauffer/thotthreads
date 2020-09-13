const mongoose = require('mongoose');
const { Schema } = mongoose;

const threadSchema = new Schema({
  parentThread: String,
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;