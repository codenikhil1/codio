const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/codial-developmet');

const db =mongoose.connection;

db.on('error',console.error.bind(console,"error connecting mongodb"));

db.once('open',function(){
    console.log('Mongodb connected successfully');
})

module.exports = db;