document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if username already exists in local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isExistingUser = storedUsers.some(user => user.username === username);

    if (isExistingUser) {
        alert('Username already exists. Please choose a different username.');
        return;
    }

    // Save the user to local storage
    const newUser = { username, email, password };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Registration successful! Please login.');
    window.location.href = 'login.html'; // Redirect to login page on successful registration
});
