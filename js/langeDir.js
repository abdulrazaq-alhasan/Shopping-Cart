let language = localStorage.getItem("lang");
if (language) {
  if (language == "ltr") {
    changeDir("ltr");
  } else {
    changeDir("rlt");
  }
}

// Lang Direction
let en = document.getElementById("en-lang");
let ar = document.getElementById("ar-lang");

// Events
ar.addEventListener("click", () => changeDir("rtl"));
en.addEventListener("click", () => changeDir("ltr"));

// Functions
function changeDir(dir) {
  document.documentElement.setAttribute("dir", dir);
  localStorage.setItem("lang", dir);
}
