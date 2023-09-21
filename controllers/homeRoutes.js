const router = require('express').Router();
const { Post, Comment, User } = require('../models');
//const withAuth = require('../utils/auth');


// TODO:
// WHEN I visit the site for the first time
// THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

// GET all posts
router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postsData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        // // Testing for insomnia
        res.json(productData);

        // Serialize data so the template can read it
        const posts = postsData.map((posts) => posts.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('homepage', {
            posts,
            //logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



// WHEN I click on the homepage option
// THEN I am taken to the homepage

// WHEN I click on any other links in the navigation
// THEN I am prompted to either sign up or sign in

// WHEN I am signed in to the site
// THEN I see navigation links for the homepage, the dashboard, and the option to log out

// WHEN I click on the homepage option in the navigation
// THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

// WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post