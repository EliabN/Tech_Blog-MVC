// TODO: WHEN I click on an existing blog post
// THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all post
router.get('/', async (req, res) => {
    try {
        const newPost = await Post.findAll({
            ...req.body,
            user_id: req.session.user_id,

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
        const updatePost = await Post.update({
            title: req.body.title,
            content: req.body.content,
        },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!updatePost[0]) {
            res.status(404).json({ message: 'No post with this id!' });
            return;
        }
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// According to MVC, what is the role of this action method?
// This action method is the Controller. It accepts input and sends data to the Model and the View.
// router.put('/:id', async (req, res) => {
//     // Where is this action method sending the data from the body of the fetch request? Why?
//     // It is sending the data to the Model so that one dish can be updated with new data in the database.
//     try {
//         const postData = await Post.update({
//             title: req.body.title,
//             description: req.body.description,
//         },
//             {
//                 where: {
//                     id: req.params.id,
//                 },
//             }
//         );
//         // If the database is updated successfully, what happens to the updated data below?
//         // The updated data (dish) is then sent back to handler that dispatched the fetch request.
//         res.status(200).json(postData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


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