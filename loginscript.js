function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('login-result');
    
    if (username === 'admin' && password === 'admin') {
        loginResult.innerHTML = '';
        setTimeout(() => {
            window.location.href = 'new/index.html';
        }, 2000);
    } else {
        loginResult.innerHTML = '';
    }
}