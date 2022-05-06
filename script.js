const submitBtn = document.getElementById("submitBtn");
const email = document.getElementById("email");
submitBtn.addEventListener("click", validateEmail);

function validateEmail() {
let reg = /^[^]+@[^]+\.[a-z]{2,3}$/;
if (email.value.match(reg)) {
    email.classList.remove("active");
email.nextElementSibling.classList.remove("error-msg");
} else {
    email.classList.add("active");
email.nextElementSibling.classList.add("error-msg");
}
}