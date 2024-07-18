// Import config
const config = require('../conifg.json');

// Controller function for user verification
const verifyUser = (req, res) => {
  const { email, password } = req.body;

  // Check if email and password exist in config file
  const userExists = config.some(user => user.email === email && user.password === password);

  // Send response based on user existence
  if (userExists) {
    console.log("verified: true: ", email, password);
    res.json({ verified: true });
  } else {
    console.log("verified: true: ", email, password);
    res.json({ verified: false });
  }
};

module.exports = { verifyUser };
