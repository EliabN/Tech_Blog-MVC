// WHEN I click on one of my existing posts in the dashboard
// THEN I am able to delete or update my post and taken back to an updated dashboard

async function editFormHandler(event) {
    event.preventDefault();
    console.log('test1')
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#description').value;
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    
    
    // Use 'put' request from Controller to update post
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // If the response is ok, that means that the post was updated successfully. 
    if (response.ok) {
        document.location.replace(`/edit-post/${id}`);
    } else {
        alert('Failed to edit post');
    }
}

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post');
        }
    }
};


document
    .querySelector('.update')
    .addEventListener('click', editFormHandler);

document
    .querySelector('.delete')
    .addEventListener('click', delButtonHandler);