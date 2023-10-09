// Logout
const logout = async () => {
    const userConfirmed = confirm("Do you want to logout?"); // Capture the user's choice

    if (userConfirmed) { // Check if the user confirmed
        const response = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("Logged out successfully");
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('#logout').addEventListener('click', logout);