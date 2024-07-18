const mongoose = require('mongoose');

const collectionName = 'queries';


const enquiry = mongoose.connection.collection(collectionName);

module.exports = enquiry;