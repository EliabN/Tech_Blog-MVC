// TODO: Login

// WHEN I click on the homepage option
// THEN I am taken to the homepage

// WHEN I click on any other links in the navigation
// THEN I am prompted to either sign up or sign in

// WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

// WHEN I click on the button to create a new blog post
// THEN the title and contents of my post are saved and I am taken back to an updated dashboard


const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

document.querySelector('#back-button').addEventListener('click', () => {
    window.location.href = '/login'; // Redirect to the sign-up page
});