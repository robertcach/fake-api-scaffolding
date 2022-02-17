const express = require('express');

const router = express.Router();

const coursesController = require('../controllers/courses.controller');


router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/courses', coursesController.list)
router.get('/courses/new', coursesController.create)
router.get('/courses/:id', coursesController.get)
router.post('/courses', coursesController.doCreate)
router.post('/courses/:id/delete', coursesController.delete)

module.exports = router;