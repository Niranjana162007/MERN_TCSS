const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : { type : String , required : true},
    description : { type : String },
    price : { type : Number , required : true},
    image : { type : String },
    category : { type : String, default : 'General' },
    rating : { type : Number, default : 4.0 }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);