const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weightClassSchema = new Schema({
    name: String,
    fighters: [{
        type: Schema.Types.ObjectId,
        ref:'Fighter'
    }]
})


// Compile the schema into a model and export it
module.exports = mongoose.model('WeightClass', weightClassSchema);
