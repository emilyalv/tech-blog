const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({});
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// profile page for logged in user
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login page - show profile if logged in, if not show login page
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//get a single post and display on posts/id page 
router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: ["id", "title", "contents", "date_created", "user_id"],
      include: [
        {
          model: User,
          attributes: [
            'name'
          ],
        },
        // {
        //   model: Comment,
        //   attributes: [
        //     'contents',
        //     'date_created',
        //     'user_id'
        //   ]
        // }
      ],
    });

    const post = postData.get({ plain: true });
    res.render('post', { 
      post,
      logged_in: req.session.logged_in 
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router