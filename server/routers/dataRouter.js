const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router
  .get('/data',
  dataController.sendData,
  (req, res) =>{
    res.status(200).json({data: res.locals.data, total: res.locals.total});
  });

module.exports = router;