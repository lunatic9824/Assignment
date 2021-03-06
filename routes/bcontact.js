let express=require('express');
let router=express.Router();

let mongoose=require('mongoose');

let passport = require('passport');





//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

let businessContactController = require('../controllers/bcontact');

/* GET Route for the Business contact List page- READ Operation */
router.get('/',requireAuth,businessContactController.displayBusinessContactList);



/* GET Route for the displaying the Add page- CREATE Operation */
router.get('/add', requireAuth, businessContactController.displayAddPage);

/* POST Route for processing the Add page- CREATE Operation */
router.post('/add', requireAuth, businessContactController.processAddPage);

/* GET Route for the displaying the Edit page- UPDATE Operation */
router.get('/edit/:id', requireAuth, businessContactController.displayEditPage);


/* POST Route for processing the Edit page- UPDATE Operation */
router.post('/edit/:id', requireAuth, businessContactController.processEditPage);


/* GET to perform Deletion- DELETE Operation */
router.get('/delete/:id', requireAuth, businessContactController.performDeletePage);

module.exports = router;