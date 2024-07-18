const mongoose = require('mongoose');

const collectionName = 'schedmain';


const schedmain = mongoose.connection.collection(collectionName);

module.exports = schedmain;