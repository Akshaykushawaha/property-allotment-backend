const mongoose = require('mongoose');

const addUserSchema = new mongoose.Schema({
  employeeNumber: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  phnumber: { type: String, required: true }, // Assuming phone numbers are stored as strings
  propertyNumber: [{ type: Number }], // Array of property numbers
  maintenanceLogNumbers: [{ type: Number }], // Array of maintenance log numbers
  queryLogNumbers: [{ type: Number }], // Array of query log numbers
  releaseId: [{ type: Number }], // Array of release IDs
  requestId: [{ type: Number }] // Array of request IDs
}, { collection: 'employees' }); // Specify the collection name here

const addUser = mongoose.model('employees', addUserSchema);

module.exports = addUser;