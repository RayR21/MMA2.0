const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fightersSchema = new Schema({
  name: String,
  upcomingFight: Date,
  rating: String,
  wins: Number,
  losses: Number
}, {
  timestamps: true
});






// Compile the schema into a model and export it
module.exports = mongoose.model('Fighter', fightersSchema);
