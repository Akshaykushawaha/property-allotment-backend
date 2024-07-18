const mongoose = require('mongoose');

const collectionName = 'employees';

// Get a reference to the collection
const User = mongoose.connection.collection(collectionName);

module.exports = User;















// Define user schema
// const userSchema = new mongoose.Schema({
//   // Define schema fields here
//   name: String,
//   // Add other fields as needed
// });

// // Create user model
// const User = mongoose.model('Usera', userSchema);