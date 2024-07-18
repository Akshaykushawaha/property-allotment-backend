const express = require('express');
const cors = require('cors');
const {connectDBuser} = require('./config/db'); // Import database connection
const userRoutes = require('./routes/userRoutes'); // Import user routes
const propertyRoutes = require("./routes/propertyRoutes");
const maintRoutes = require("./routes/maintRoutes");
const schdRoutes = require("./routes/schdRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const requestAccess = require("./routes/requestAccess");
const releaseRequest = require("./routes/releaseRequest");
const verifyUserRoute = require("./routes/verifyUserRoute"); // Import verify user route


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDBuser();

// Routes
app.use('/api/users', userRoutes);
app.use("/api/property", propertyRoutes)
app.use("/api/maintain", maintRoutes)
app.use("/api/schdmaintain", schdRoutes)
app.use("/api/enquiry", enquiryRoutes)
app.use("/api/requestaccess", requestAccess)
app.use("/api/releaserequest", releaseRequest)
app.use("/api", verifyUserRoute);

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});