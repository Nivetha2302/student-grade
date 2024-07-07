document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists in local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        // Store logged in user in session storage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html'; // Redirect to home page on successful login
    } else {
        alert('Invalid username or password');
    }
});
