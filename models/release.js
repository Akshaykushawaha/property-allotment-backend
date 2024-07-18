const mongoose = require('mongoose');

const collectionName = 'release';

// Get a reference to the collection
const releaseDb = mongoose.connection.collection(collectionName);

module.exports = releaseDb;
