let mongoose = require('mongoose');

let Inventory = require('../model/inventory');


exports.list = function(req, res, next) {
    Inventory.find((err,inventoryList)=>{

        if(err){
            return console.error(err);
        }
        else{
            console.log(inventoryList);
            res.render('inventory/list',
             { title: 'inventorylist' ,
               inventoryList : inventoryList
             }
             );
        }
    })
}


exports.aboutme = function(req, res, next) {
    res.render('aboutme', { title: 'About' });
}