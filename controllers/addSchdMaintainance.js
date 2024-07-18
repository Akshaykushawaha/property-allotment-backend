const ScheduledMaintenance = require('../models/addschdmaintainance');

const addScheduledMaintenance = async (req, res) => {
  const { date, details, maintenanceLogNumber } = req.body;

  try {
    // Create a new scheduled maintenance entry
    const newScheduledMaintenance = new ScheduledMaintenance({
      date: date,
      details: details,
      maintenanceLogNumber: maintenanceLogNumber
    });

    // Save the new scheduled maintenance entry to the database
    await newScheduledMaintenance.save();

    console.log('Scheduled Maintenance added:', newScheduledMaintenance);
    res.status(201).json(newScheduledMaintenance);
  } catch (error) {
    console.error('Error adding scheduled maintenance:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addScheduledMaintenance };
