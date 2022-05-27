const containerMessages = document.querySelector('.container-messages');

const form = document.querySelector('.form-login');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.querySelector('input[name="username"]').value;
    const password = form.querySelector('input[name="password"]').value;
    if (username !== 'user' || password !== 'password') {
        containerMessages.innerHTML = '<p>Login ou senha inválidos.</p>'
        return;
    }

    location.href = "./"
});