// TODO: Login

// WHEN I click on the homepage option
// THEN I am taken to the homepage

// WHEN I click on any other links in the navigation
// THEN I am prompted to either sign up or sign in

// WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

// WHEN I click on the button to create a new blog post
// THEN the title and contents of my post are saved and I am taken back to an updated dashboard

const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const name = document.querySelector('#name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (name && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        console.log("name:", name);
        console.log("password:", password);
        console.log("response:", response);

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document.querySelector('#signup-button').addEventListener('click', () => {
    window.location.href = '/signup'; // Redirect to the sign-up page
});