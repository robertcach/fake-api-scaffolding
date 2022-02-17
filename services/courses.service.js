const httpClient = require('./base.service'); // Llama al module export del archivo "base.service"

const getCourses = () => httpClient.get('/courses');

const getCourse = (courseId) => httpClient.get(`/courses/${courseId}`);

const createCourse = (data) => httpClient.post('/courses', data)

const deleteCourse = (courseId) => httpClient.delete(`/courses/${courseId}`)


module.exports = {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse
}

// ".get"=> método de axios
// ".post"=> método de axios
// ".delete"=> método de axios
// ".get"=> método de axios