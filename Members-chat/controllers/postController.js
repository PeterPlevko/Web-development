let User = require('../models/user')
let Post = require('../models/post')
const { body,validationResult } = require('express-validator');


exports.index_get = function(req,res,next) {
    
    Post.find()
        .populate('author')
        .exec(function(err,post_list) {
            if(err) {return next(err)}
            res.render('index', {post_list: post_list})
        })
}

exports.index_post = [
    body('title', 'title is required').trim().escape(),
    body('text', 'text is required').trim().escape(),
    function(req,res,next) {
        let post = new Post ({
            title : req.body.title,
            text : req.body.text,
            author : req.user._id
        })
        post.save(function(err) {
            if (err) {return next(err)}
            res.redirect('/')
        })
    }
]

exports.post_delete = function (req, res, next) {
    Post.findByIdAndDelete(req.body.postId, function(err){
        if(err) {return next(err)}
        res.redirect('/')
    })
}

