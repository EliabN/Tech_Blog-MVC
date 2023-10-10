// WHEN I enter a comment and click on the submit button while signed in
// THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('.the-post').getAttribute('data-id');
    //const user_id = document.querySelector('.add-comment').getAttribute('data-id');

    if (comment) {
        const newComment = await fetch(`/api/comments/`, {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });



        if (newComment.ok) {
            alert('Comment saved!')
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to create post');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);