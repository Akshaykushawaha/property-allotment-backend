const Property = require('../models/Property');

const showAllProperty = async (req, res) => {
  try {
    console.log("called showProperty!");
    const property = await Property.find({}).toArray({});
    console.log("this is the resposne: ");
    console.log(property);
    console.log("this is end.");
    res.status(200).json(property);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const showProperty = async (req, res) => {
  let { propertyNumber } = req.params;
  if ((typeof propertyNumber) == "string") {
    propertyNumber = parseInt(propertyNumber);
  }
  try {

    const propertyData = await Property.findOne({ propertyNumber: propertyNumber });

    if (!propertyData) {
      return res.status(404).json({ message: 'Property data not found' });
    }

    console.log('propertyData:', propertyData);
    res.status(200).json(propertyData);
  } catch (error) {
    console.error('Error finding Property Data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { showProperty, showAllProperty };