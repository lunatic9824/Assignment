let express = require('express');
let router = express.Router();
let inventoryController = require('../controllers/inventory');
router.get('/',inventoryController.list);


module.exports = router;