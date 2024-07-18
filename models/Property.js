const mongoose = require('mongoose');

const collectionName = 'property';
// const propertySchema = new mongoose.Schema({
//     house:{ type: String, required: true, unique: true }
// });

const Property = mongoose.connection.collection(collectionName);

module.exports = Property;