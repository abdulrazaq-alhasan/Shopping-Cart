let username = document.querySelector("#username");
let password = document.querySelector("#password");

let loginBtn = document.querySelector("#login-btn");

let getUsername = localStorage.username;
let getPassword = localStorage.password;

loginBtn.addEventListener("click", login);

function login(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    Swal.fire("Please fill in all data");
  } else {
    if (
      getUsername &&
      getUsername === username.value &&
      getPassword &&
      getPassword === password.value
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1500);
    } else {
      Swal.fire("Username or password is wrong!!");
    }
  }
}
