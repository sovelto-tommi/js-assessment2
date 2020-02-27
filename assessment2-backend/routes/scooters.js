const express = require('express');
const router = express.Router();
const url = require('url');
const dao = require('../model/pg_dao');

router.route('')
.get(function(req, res) {
  dao.getAllScooters().then(scoots => res.json(scoots));
})
.post((req, res)=> {
  const scooter = req.body;
  dao.saveScooter(scooter).then(resp => {
    const id = resp.id;
    const requestedUrl = url.format({
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.originalUrl
    })
    res.setHeader('Location', `${requestedUrl}/${id}`)
    res.status(201).json({scooter: scooter});
  })
});

router.route('/:id')
  .get((req, res) => {
    dao.getSingleScooter(req.params.id)
      .then(scoot => {
        if (scoot) {
          return res.json(scoot)
        }
        res.status(404).json("Not found");
      })
  })
module.exports = router;
