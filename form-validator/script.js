const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')

function showError(input, message) {
    const form = input.parentElement
    console.log(form);
    form.className = "form-control error"
    const small = form.querySelector('small')
    small.innerText = message;
}


function showSuccess(input) {
    const form = input.parentElement
    form.className = "form-control success"
}

function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    if (username.value === '') {
        showError(username, "Username required")
    } else {
        showSuccess(username)
    }

    if (email.value === '') {
        showError(email, "Email required")
    } else if(!checkEmail(email.value)) {
        showError(email, "Email is not valid")
    } else {
        showSuccess(email)
    }
   
})
