var Score = require('../models/score');

module.exports = {
  getAllScores
};


function getAllScores(req, res){
  Score.find({})
  .then(scores => res.json(scores));
}