const form = document.querySelector("#form");
const email = document.querySelector("#email")

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInput();
})
function checkInput() {
    // find value 
    const emailValue = email.value.trim();
    if (emailValue === "") {
        setErrorFor(email, "Email can't be empty")
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    }
    else {
        setSuccessFor(email);
        alert("you have successfully registered");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form_control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form_control success"
}
function isEmail(input) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
}