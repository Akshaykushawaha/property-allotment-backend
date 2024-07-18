const Maintainance = require('../models/maintainance');


const showAllMaintain = async (req, res) => {
  try {
    // Find all users
    const MaintainanceList = await Maintainance.find({}).toArray({});
    console.log('Maintainance List:', MaintainanceList);
    res.status(200).json(MaintainanceList);
  } catch (error) {
    console.error('Error finding items:', error);
  }
};

const showOneMaintain = async (req, res) => {
  let { maintainance } = req.params;
  if (typeof maintainance === "string"){
    maintainance = parseInt(maintainance);
  }
  try {
    
    const MaintainanceOne = await Maintainance.findOne({ maintenanceLogNumber:maintainance });

    if (!MaintainanceOne) {
      return res.status(404).json({ message: 'item not found' });
    }

    console.log('MaintainanceOne :', MaintainanceOne);
    res.status(200).json(MaintainanceOne);
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { showOneMaintain, showAllMaintain};