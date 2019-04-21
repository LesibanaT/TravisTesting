'use strict'

let path = require('path');
let express = require('express')
let router = express.Router();
//let classList = [];
let classList =  require("./classList");
// Router get
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'));
});

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'));
});

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'));
});
router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'));
});

router.get('./addStudentNumberNCourse', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'addStudentNumberNCourse.html'));
})
/// RESTFUL interface
router.get('/api/list', function (req, res) {
  res.json(classList);
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]);
});

// Router posts
router.post('/api/create', function (req, res) {
  console.log("creating the following student:", req.body.student);
  classList.push(req.body.student)
  res.redirect(req.baseUrl + '/api/list')
});

router.post('/api/delete', function (req, res) {
  console.log("Deleting the following student:", req.body.student);
  classList = classList.filter(e => e !== req.body.student)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/edit', function (req, res) {
  console.log("Editing the following student:", req.body.student);
  const student = req.body.student;

  const index = classList.indexOf((student.toString()))
  console.log(index);

  classList[index] = req.body.Newstudent;
  res.redirect(req.baseUrl + '/api/list')
});

router.post('/api/addStudentNumberNCourse', function (req, res) {
  console.log('Adding properties to:', req.body.student)
  const student = req.body.student;

  const index = classList.indexOf((student.toString()));
  console.log(index);

  classList[index] = req.body.Newstudent;

  res.redirect(req.baseUrl + '/api/list');
})

module.exports = router; 
