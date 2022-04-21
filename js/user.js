let userRegistration = document.querySelector("#user-registration");
let userInfo = document.querySelector("#user-info");
let user = document.querySelector("#user");
let logout = document.querySelector("#logout");

let username = localStorage.username;
let password = localStorage.password;

if (username && password) {
  userRegistration.remove();
  userInfo.style.display = "flex";
  user.innerHTML = username;
}

logout.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "register.html";
  }, 1500);
});