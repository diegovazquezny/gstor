const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router
  .get('/data',
  dataController.sendData,
  (req, res) => {
    res.status(200).json({
      data: res.locals.data, 
      total: res.locals.total,
      initialGameInfo: res.locals.initialGameInfo
    });
  })
  .get('/game',
  dataController.sendGameData,
  (req, res) => {
    res.status(200).json({gameData: res.locals.gameData});
  })
  .get('/search',
  dataController.search,
  (req, res) => {
    res.status(200).json({results: res.locals.results});
  });

module.exports = router;