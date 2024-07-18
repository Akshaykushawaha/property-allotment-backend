const mongoose = require('mongoose');

const collectionName = 'maintenance';


const Maintainance = mongoose.connection.collection(collectionName);

module.exports = Maintainance;