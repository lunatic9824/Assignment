/* 
 Name : Pankaj Sharma
 Id:301239159
 Date:5th february 2022

*/

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
router.get('/services', indexxcontroller.services);






router.get('/login',indexxcontroller.displayLoginPage);

/* POST Route for processing the login page */
router.post('/login',indexxcontroller.processLoginPage);

/* GET Route for the displaying the register page */
router.get('/register',indexxcontroller.displayRegisterPage);

/* POST Route for processing the register page */
router.post('/register',indexxcontroller.processRegisterPage);

/* GET to perform User Logout */
router.get('/logout',indexxcontroller.performLogout);


module.exports = router;
