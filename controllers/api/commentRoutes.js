// TODO: WHEN I enter a comment and click on the submit button while signed in
// THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

//THEN I am prompted to enter my username and password
// THEN I am signed out of the site

// WHEN I am idle on the site for more than a set time
// THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts

// GET all post
router.get('/', async (req, res) => {
    try {
        const newPost = await Post.findAll({
            // ...req.body,
            // user_id: req.session.user_id,

            include: [{ model: Comment }]
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});


// POST create new post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,

            include: [{ model: Comment }]
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT update a post
router.put('/:id', async (req, res) => {
    // Update a post by its `id` value
    try {
        const postData = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!postData[0]) {
            res.status(404).json({ message: 'No post with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE delete post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;