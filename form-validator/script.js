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
    if (re.test(email.value.trim())) {
        showSuccess(email);
    } else {
        showError(email, 'Email is not valid');
    }
}

// Check required fields
function checkReq(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
         }
    });
}

// Get fieldname to make error msg start with uppercase
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} is to short`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} is to long`)
    }else {
        showSuccess(input)
    }
}

//check if password matches

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value ) {
        showError(input2, 'Passwords do not match')
    } else {
        showSuccess(input1)
        showSuccess(input2)
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    checkReq([username, email, password, confirm_password])
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, confirm_password)
})


//      Works but messy

// form.addEventListener('submit', function(e) {
//     e.preventDefault()

//     if (username.value === '') {
//         showError(username, "Username required")
//     } else {
//         showSuccess(username)
//     }

//     if (email.value === '') {
//         showError(email, "Email required")
//     } else if(!checkEmail(email.value)) {
//         showError(email, "Email is not valid")
//     } else {
//         showSuccess(email)
//     }
   
// })
