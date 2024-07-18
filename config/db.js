const mongoose = require('mongoose');

const connectDBuser = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://akshay:propertyallotment@cluster0.c9d47cy.mongodb.net/allotment?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};


module.exports = { connectDBuser };