function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('login-result');

    // Simulate a simple login
    if (username === 'admin' && password === 'admin') {
        loginResult.innerHTML = '<p>Login successful! Redirecting...</p>';
        setTimeout(() => {
            window.location.href = 'welcome.html'; // Redirect to a welcome page
        }, 2000); // Delay for 2 seconds before redirecting (for demonstration)
    } else {
        loginResult.innerHTML = '<p>Invalid username or password. Please try again.</p>';
    }
}