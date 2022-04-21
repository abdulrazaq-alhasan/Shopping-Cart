// Register user
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    Swal.fire("Please fill in all data");
  } else {
      (localStorage.username = username.value),
      (localStorage.email = email.value),
      (localStorage.password = password.value),
      setTimeout(() => {
        window.location = "login.html";
      }, 1500);
  }
}
