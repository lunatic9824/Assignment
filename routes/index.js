let express = require('express');
let router = express.Router();
let indexxcontroller = require('../controllers/indexcontroller')

/* GET home page. */
router.get('/', indexxcontroller.home);

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET contactme page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contactme' });
});

module.exports = router;
