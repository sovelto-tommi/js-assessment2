const express = require('express');
const router = express.Router();
const dao = require('../model/pg_dao');

router.route('')
.get(function(req, res) {
  dao.getAllModels().then(models=>res.json(models))
});

module.exports = router;
