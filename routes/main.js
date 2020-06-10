const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/movies', async (req, res, next) => {
  const movie = require('../controllers/movieController');
  movie.list_all_movies(req, res);
  console.log(req.query);
  console.log(req.params);
  console.log(req.url);
  console.log(req);
});

module.exports = router;
