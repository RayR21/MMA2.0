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

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  // Don't forget to add the comma above then
  // add the 3 new properties below
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});





// Compile the schema into a model and export it
module.exports = mongoose.model('Fighter', fightersSchema);
