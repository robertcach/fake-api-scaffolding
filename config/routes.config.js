const express = require('express');

const router = express.Router();

const coursesController = require('../controllers/courses.controller');


router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/courses', coursesController.list)
router.get('/courses/:id', coursesController.get)

module.exports = router;