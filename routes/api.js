var express = require('express');
var router = express.Router();
var scoresCtrl = require('../controllers/scores');

router.get('/highscores', scoresCtrl.getAllScores);