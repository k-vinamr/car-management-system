const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  licenseNumber: String,
  driverName: String,
  isAvailable: Boolean,
  dailyKilometers: Number,
  petrolAdded: Number,
  destination: String,
  availabilityTime: String
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
