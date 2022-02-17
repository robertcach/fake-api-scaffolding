const coursesService = require('../services/courses.service');

module.exports.list = (req, res, next) => {
  coursesService.getCourses()
    .then(response => {
      res.render('courses', { courses: response.data })
    })
    .catch(err => next(err))
}


module.exports.get = (req, res, next) => {
  coursesService.getCourse(req.params.id)
    .then(response => {
      res.render('courseDetail', { course: response.data })
    })
    .catch(err => next (err))
}