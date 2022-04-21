// Difine Products
let productsDom = document.querySelector(".products");
let favorite = document.querySelector(".favorite");

let products = productsDB;

// Display products
// Its self-invoking function
let displayProducts;
(displayProducts = function (products = []) {
  let items = products.map((item) => {
    return `
    <div class="product-item" style="border: ${
      item.isNew === "yes" ? "1px solid green" : ""
    }">
    <img src="${item.imgUrl}" class="product-item-img" alt="Iphone13">
    <div class="product-item-desc">
      <a onclick="saveId(${item.id})">${item.title}</a>
      <p>${item.desc}</p>
      <span>Size: ${item.size}</span>
      ${
        item.isNew === "yes" &&
        '<button onclick="editProduct(' +
          item.id +
          ')" class="edit-product">Edit Product</button>'
      }
    </div>
    <div class="product-item-actions">
      <i onclick="addToFavorite(${item.id})" style="color: ${
      item.liked == true ? "red" : ""
    }" class="fa-solid fa-heart favorite"></i>
      <button class="add-to-cart" onclick="addToCart(${
        item.id
      })">Add to cart</button>
    </div>
  </div>
  
  `;
  });
  productsDom.innerHTML = items.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

// Add to cart
function addToCart(id) {
  let username = localStorage.username;
  if (username) {
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let product = products.find((item) => item.id === id);
    let isPrductsInCart = addedItem.some((item) => item.id === product.id);

    if (isPrductsInCart) {
      product.qty += 1;
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItem.push(product);
    }

    // ui
    dropdownDiv.innerHTML = "";
    addedItem.forEach((item) => {
      dropdownDiv.innerHTML += ` <p>${item.title} <span class="item-qty">${item.qty}</span> </p> `;
    });

    // Save data
    localStorage.productsInCart = JSON.stringify(addedItem);

    // Add counter of items
    badge.style.display = "block";
    badge.innerHTML = addedItem.length;
  } else {
    window.location = "login.html";
  }
}

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, index, myArray) => myArray.indexOf(item) === index && index)
    .filter((item) => arr[item])
    .map((item) => arr[item]);
  return unique;
}

// SaveId function
function saveId(id) {
  localStorage.id = id;
  window.location = "details.html";
}

// Search function
let input = document.getElementById("search");

input.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.products));

  if (e.target.value.trim() === "")
    displayProducts(JSON.parse(localStorage.products));
});

function search(title, myArray) {
  let arr = myArray.filter(
    (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
  );
  displayProducts(arr);
}

// Add to favorite
let favoriteItems = localStorage.favorite
  ? JSON.parse(localStorage.favorite)
  : [];
function addToFavorite(id) {
  let username = localStorage.username;
  if (username) {
    let product = products.find((item) => item.id === id);
    product.liked = true;
    favoriteItems = [...favoriteItems, product];

    let uniqueArray = getUniqueArr(favoriteItems, "id");

    localStorage.favorite = JSON.stringify(uniqueArray);
    products.map((item) => {
      if (item.id === product.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts(products);
  } else {
    window.location = "login.html";
  }
}

// Filter By Size
let sizeFiltern = document.getElementById("size-filter");

sizeFiltern.addEventListener("change", filterBySize);

function filterBySize(e) {
  let val = e.target.value;
  let products = JSON.parse(localStorage.products) || products;

  if (val === "all") {
    displayProducts(products);
  } else {
    let myProducts = products.filter((item) => item.size === val);
    displayProducts(myProducts);
  }
}

// Edit Product
function editProduct(id) {
  console.log("id", id);
  localStorage.setItem("editID", id);
  window.location = "editProduct.html";
}