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

form.addEventListener('submit', function(e) {
    e.preventDefault()

    if (username.value === '') {
        showError(username, "Username invalid")
    } else {
        showSuccess(username)
    }
})
