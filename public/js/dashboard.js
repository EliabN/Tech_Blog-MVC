// TODO: WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post


// <!--TODO: WHEN I click on the button to add a new blog post
// THEN I am prompted to enter both a title and contents for my blog post with my new blog post-->
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-desc').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};


// Select "Add New Post" button
const addNewPostButton = document.querySelector('#add-new-post');

// Select the new post form
const newPostForm = document.querySelector('.create-post');

// All current port div
const currentPosts = document.querySelector('.post-list')

// Add a click event listener to the button
addNewPostButton.addEventListener('click', () => {
    // Display New Post the form
    if (newPostForm.style.display === 'none' || newPostForm.style.display === '') {
        newPostForm.style.display = 'block';
        // Remove "Add New Post" Button and all current posts from page
        addNewPostButton.style.display = 'none';
        currentPosts.style.display = 'none';
    } else {
        newPostForm.style.display = 'none';
    }
});




document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);


