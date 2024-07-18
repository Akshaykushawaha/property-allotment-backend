const mongoose = require('mongoose');

const collectionName = 'request';

// Get a reference to the collection
const AccessDb = mongoose.connection.collection(collectionName);

module.exports = AccessDb;
