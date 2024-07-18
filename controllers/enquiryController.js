const enquirydb = require('../models/enquiry');


const showAllEnquiry = async (req, res) => {
  try {
    // Find all users
    const EnquiryList = await enquirydb.find({}).toArray({});
    console.log('Maintainance List:', EnquiryList);
    res.status(200).json(EnquiryList);
  } catch (error) {
    console.error('Error finding items:', error);
  }
};

const showOneEnquiry = async (req, res) => {
  let { enquiry } = req.params;
  if (typeof enquiry === "string"){
    enquiry = parseInt(enquiry);
  }
  try {
    
    const Enquiryone = await enquirydb.findOne({ querylognumber:enquiry });

    if (!Enquiryone) {
      return res.status(404).json({ message: 'item not found' });
    }

    console.log('MaintainanceOne :', Enquiryone);
    res.status(200).json(Enquiryone);
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { showAllEnquiry, showOneEnquiry};