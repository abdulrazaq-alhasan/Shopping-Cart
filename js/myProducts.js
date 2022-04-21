// Define Variables
let productsDom = document.querySelector(".products");
let noItems = document.querySelector(".no-items");

// Display MY products
let displayProducts;
(displayProducts = function (products = []) {
  let myProducts = products.filter((item) => item.isNew === "yes");
  if (myProducts.length != 0) {
    let items = myProducts.map((item) => {
      return `
          <div class="product-item" style="border: ${
            item.isNew === "yes" ? "1px solid green" : ""
          }">
            <img src="${item.imgUrl}" class="product-item-img" alt="Iphone13">
            <div class="product-item-desc">
            <a onclick="saveId(${item.id})">${item.title}</a>
            <p>${item.desc}</p>
            <span>Size: ${item.size}</span>
            <button onclick="editProduct(${
              item.id
            })" class="edit-product">Edit</button>
            
            <button onclick="deleteProduct(${
              item.id
            })" class="delete-product">Delete</button>
            </div>
            </div>
            
            `;
    });
    productsDom.innerHTML = items.join("");
  } else {
    noItems.innerHTML = "<h2>No Products in cart</h2>";
  }
})(JSON.parse(localStorage.getItem("products")) || productsDB);


// Edit Product
function editProduct(id) {
    console.log("id", id);
    localStorage.setItem("editID", id);
    window.location = "editProduct.html";
  }
  

// Delete Product
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((item) => item.isNew === "yes");
  let filtered = myProducts.filter((item) => item.id !== id);

  let clikedItem = myProducts.find(item => item.id === id)
  products = products.filter(item => item.id !== clikedItem.id)
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts(filtered);
  location.reload();
}
