// TODO: Login

// WHEN I click on the homepage option
// THEN I am taken to the homepage

// WHEN I click on any other links in the navigation
// THEN I am prompted to either sign up or sign in


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
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

document.querySelector('#back-button').addEventListener('click', () => {
    // Redirect to the sign-up page
    window.location.href = '/login';
});