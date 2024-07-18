const schedmain = require("../models/schdmaintainance");

const addScheduledMaintenance = async (req, res) => {
  const { date, details, maintenanceLogNumber } = req.body;

  try {
    // Create a new scheduled maintenance entry
    const newScheduledMaintenance = new schedmain({
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

const showOneSchdMaintain = async (req, res) => {
    let { maintainance } = req.params;
    if (typeof maintainance === "string"){
      maintainance = parseInt(maintainance);
    }
    try {
      
      const MaintainanceOne = await schedmain.findOne({ maintenanceLogNumber:maintainance });
  
      if (!MaintainanceOne) {
        return res.status(404).json({ message: 'item not found' });
      }
  
      console.log('SchdMaintainanceOne :', MaintainanceOne);
      res.status(200).json(MaintainanceOne);
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };  

  const showAllSchdMaintain = async (req, res) => {
    try {
      const SchdMaintainanceAll = await schedmain.find({}).toArray({});
  
      if (!SchdMaintainanceAll) {
        return res.status(404).json({ message: 'item not found' });
      }
  
      console.log('SchdMaintainanceOne :', SchdMaintainanceAll);
      res.status(200).json(SchdMaintainanceAll);
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };  

module.exports = {showOneSchdMaintain, showAllSchdMaintain, addScheduledMaintenance };