let dropdownDiv = document.querySelector(".dropdown-menu div");
let dropdown = document.querySelector(".dropdown-menu");
let badge = document.querySelector(".badge");
let shoppingCart = document.querySelector(".shopping-cart");

// Toggle Dropdown Menu
shoppingCart.addEventListener("click", toggleDropdownMenu);

// Check if there are items in localStorage and display them in the cart
let addedItem = localStorage.productsInCart
  ? JSON.parse(localStorage.productsInCart)
  : [];
if (addedItem) {
  addedItem.map((item) => {
    dropdownDiv.innerHTML += ` <p>${item.title} ${item.qty}</p> `;
  });
  badge.style.display = "block";
  badge.innerHTML = addedItem.length;
}

// Toggle Dropdown Menu
function toggleDropdownMenu() {
    if (dropdownDiv != "") {
      if (dropdown.style.display == "block") {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
      }
    }
  }
  