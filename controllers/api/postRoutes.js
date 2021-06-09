const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Post, Comment } = require('../../models');

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

//route for /api/posts to find all posts
router.get('/', async (req,res) => {    
    try {
        const postData = await Post.findAll({include: Comment})
        res.status(200).json(postData);
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router