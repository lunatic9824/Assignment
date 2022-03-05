
let URI="mongodb+srv://dbadmin:vnbdosiQZjLzKiec@cluster1.o1vuw.mongodb.net/mydb?retryWrites=true&w=majority"

let mongoose = require('mongoose');

module.exports = function(){

        mongoose.connect(URI);

        let mongoDB = mongoose.connection;
        mongoDB.on('error',console.error.bind(console,'Connection Error:'));
        mongoDB.once('open',()=>{
        console.log('connected to mongoDB');
        });

        return mongoDB;
}