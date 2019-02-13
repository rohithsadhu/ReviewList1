const express = require('express');
const router = express.Router();

const Review = require('../models/reviews');

//retrieving data
router.get('/reviews', (req,res,next)=>{
    Review.find(function(err, reviews){
        res.json(reviews);
    });
});

//adding data
router.post('/review',(req,res,next)=>{
    let newReview = new Review({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    reviewdesc: req.body.reviewdesc
    });
    newReview.save((err,review)=>{
        if(err){
        res.json({msg: 'Failed to add Review'});
        }
        else{
            res.json({msg: 'Review added successfully'});
        }
    }); 
});

//deleting contact
router.delete('/review/:id',(req,res,next)=>{
    Review.remove({_id:req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;