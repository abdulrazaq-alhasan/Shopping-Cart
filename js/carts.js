// Define Variables
let productsDom = document.querySelector(".products");
let noItems = document.querySelector(".no-items");

// Display cart products
function displayCartProducts(allProducts = []) {
  if (JSON.parse(localStorage.productsInCart).length === 0) {
    noItems.innerHTML = ` <h2>No Products in cart</h2> `;
  }

  let products = JSON.parse(localStorage.productsInCart) || allProducts;
  let items = products.map((item) => {
    return `
      <div class="product-item">
      <img src="${item.imgUrl}" class="product-item-img" alt="Iphone13">
      <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <span>Size: ${item.size}</span> <br>
        <span>Quantity: ${item.qty}</span>
      </div>
      <div class="product-item-actions">
        <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove to cart</button>
      </div>
    </div>
    
    `;
  });
  productsDom.innerHTML = items.join("");
}
displayCartProducts();

// Remove from cart
function removeFromCart(id) {
  let productsInCart = localStorage.productsInCart;
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let newItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(newItems));
    displayCartProducts(newItems);
  }
}
