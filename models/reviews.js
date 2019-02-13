const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required:true
    },
    reviewdesc:{
        type: String,
        required: true
    }
});

const Review = module.exports = mongoose.model('Review', ReviewSchema);
