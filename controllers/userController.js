const User = require('../models/User');
const addUser = require("../models/addUser");

const updateUser = async (req, res) => {
  const { email, maintenanceLogNumbers } = req.body;

  try {
    // Find the user by email and update maintenanceLogNumbers
    const updatedUser = await addUser.findOneAndUpdate(
      { email: email },
      { $set: { maintenanceLogNumbers: maintenanceLogNumbers } },
      { new: true } // To return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Updated User:', updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const showAllUser = async (req, res) => {
  try {
    // Find all users
    const usersList = await User.find({}).toArray({});
    console.log('Users:', usersList);
    res.status(200).json(usersList);
  } catch (error) {
    console.error('Error finding users:', error);
  }
};

const showUser = async (req, res) => {
  const { email } = req.params;

  try {
    
    const user = await User.findOne({ email:email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('User:', user);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { showAllUser, showUser, updateUser  };