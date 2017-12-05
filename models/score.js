var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scoreSchema = new Schema({
  initials: String,
  numGuesses: Number,
  seconds: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Score', scoreSchema);