const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Post, Comment } = require('../../models');
const { restore } = require('../../models/User');

//create new post
router.post('/', withAuth, (req, res) => {
    const newPost = {
        title: req.body.title,
        contents: req.body.contents,
        user_id: req.session.user_id,
        
    };
    Post.create(newPost).then(postData => {
        res.json(postData)
    })
    .catch(err => console.log(err));    
});



module.exports = router