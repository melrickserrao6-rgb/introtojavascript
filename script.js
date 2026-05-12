function myFunction() {
    var a = 4;
    document.getElementById("demo").innerHTML = a*a;
}
function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');
    let message = '';
    if(email === ''){
        message = 'please enter an email';
        msgBox.style.color = 'red';
    } else if (pass === ''){
        message = 'please enter a password';
        msgBox.style.color = 'red';
    } else if (age === ''){
        message = 'please enter age';
        msgBox.style.color = 'red';
    } else {
        message = 'Login Successful!';
        msgBox.style.color = 'green';
    }
    msgBox.innerHTML = message;
}

document.getElementById("loginForm").onsubmit = validate;

document.getElementById("email").oninput = () => validate({ preventDefault: () => {}});
document.getElementById("password").oninput = () => validate({ preventDefault: () => {}});
document.getElementById("age").oninput = () => validate({ preventDefault: () => {}});