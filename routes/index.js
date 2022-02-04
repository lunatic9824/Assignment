let express = require('express');
let router = express.Router();
let indexxcontroller = require('../controllers/indexcontroller')

/* GET home page. */
router.get('/', indexxcontroller.home);

/* GET projects page. */
router.get('/contactme', indexxcontroller.contactme);

/* GET about page. */
router.get('/about', indexxcontroller.aboutme);

/* GET contactme page. */
router.get('/projects', indexxcontroller.projects);

/* GET Services page. */
router.get('/Services', indexxcontroller.services);

module.exports = router;
