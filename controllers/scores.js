var Score = require('../models/scores');

module.exports = {
  getAllScores
};


function getAllScores(req, res){
  Score.find({})
  .then(scores => res.json(scores));
}