require('dotenv').config();
require('./config/database');
var Score = require('./models/score');

Score.remove({}).then(() => {
  Score.create([
    {initials: 'MCB', numGuesses: 3, seconds: 1000},
    {initials: 'CBE', numGuesses: 5, seconds: 2000},
    {initials: 'XYZ', numGuesses: 8, seconds: 3000},
    {initials: 'RB', numGuesses: 6, seconds: 4000}
  ]).then(() => {
    process.exit();
  });
})