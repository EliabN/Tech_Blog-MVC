// TODO: WHEN I click on an existing blog post
// THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all comment
router.get('/', async (req, res) => {
    try {
        const newComment = await Comment.findAll({
            // ...req.body,
            // user_id: req.session.user_id,

            include: [{ model: User }]
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


// POST create new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,

            include: [{ model: User }]
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT update a comment
router.put('/:id', async (req, res) => {
    // Update a comment by its `id` value
    try {
        const newComment = await Comment.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!commentData[0]) {
            res.status(404).json({ message: 'No comment with this id!' });
            return;
        }
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});


// DELETE delete comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this id!' });
            return;
        }

        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;