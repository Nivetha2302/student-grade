document.getElementById('logout').addEventListener('click', function(event) {
    event.preventDefault();

    // Clear current user session
    sessionStorage.removeItem('currentUser');
    window.location.href = 'login.html'; // Redirect to login page after logout
});
