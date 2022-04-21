// Define Variables
let productsDom = document.querySelector(".products");
let noItems = document.querySelector(".no-items");

// Display favorite products
function displayFavoriteProducts(allProducts = []) {

  if (JSON.parse(localStorage.favorite).length === 0) {
    noItems.innerHTML = ` <h2>No Products in cart</h2> `;
  }
    

  let products = JSON.parse(localStorage.favorite) || allProducts;
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
        <button class="add-to-cart" onclick="removeFromFavorite(${item.id})">Remove from favorite</button>
      </div>
    </div>
    
    `;
  });
  productsDom.innerHTML = items.join('');
}
displayFavoriteProducts();

// Remove from cart
function removeFromFavorite(id) {
  let favorite = localStorage.favorite;
  if (favorite) {
    let items = JSON.parse(favorite);
    let newItems = items.filter((item) => item.id !== id);
    localStorage.favorite = JSON.stringify(newItems)
    displayFavoriteProducts(newItems);
  }
}
