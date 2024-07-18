const mongoose = require('mongoose');

const scheduledMaintenanceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  details: { type: String, required: true },
  maintenanceLogNumber: { type: Number, required: true }
}, { collection: 'schedmain' }); // Specify the collection name here

const ScheduledMaintenance = mongoose.model('schedmain', scheduledMaintenanceSchema);

module.exports = ScheduledMaintenance;