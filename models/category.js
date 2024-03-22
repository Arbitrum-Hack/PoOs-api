const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    manufacturer: {
        type:mongoose.Types.ObjectId,
        ref:"Manufacturer",
        required:true
    }
});

module.exports = mongoose.model('Category', categorySchema);
