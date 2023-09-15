function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('login-result');

    // Simulate a simple login
    if (username === 'admin' && password === 'admin') {
        loginResult.innerHTML = '<p>successful</p>';
        setTimeout(() => {
            window.location.href = 'new/index.html';
        }, 2000);
    } else {
        loginResult.innerHTML = '<p>invalid</p>';
    }
}