const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Post, Comment } = require('../../models');

//create new comment
router.post('/', withAuth, (req, res) => {
    const newComment = {
        contents: req.body.contents,
        user_id: req.session.user_id,
        post_id: req.params.id,
        
    };
    Comment.create(newComment).then(commentData => {
        res.json(commentData)
    })
    .catch(err => console.log(err));    
});

module.exports = router
