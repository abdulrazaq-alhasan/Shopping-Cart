// // Variables
let products = JSON.parse(localStorage.products) || productsDB;
console.log(products);
let productID = JSON.parse(localStorage.getItem("editID"));
let product = products.find((item) => item.id === productID);
console.log("befor update", product);

let ProductName = document.getElementById("name");
let desc = document.getElementById("description");
let select = document.querySelector("select");
let form = document.querySelector("form");
let imgInput = document.getElementById("upload-img");
let productSize;
let productImage;

ProductName.value = product.title;
desc.value = product.desc;
select.value = product.size;
productImage = product.imgUrl;

// // Events
select.addEventListener("change", getSize);
form.addEventListener("submit", updateProduct);
imgInput.addEventListener("change", uploadImg);

// // Functions
function getSize(e) {
  productSize = e.target.value;
}

function updateProduct(e) {
  e.preventDefault();

  product.title = ProductName.value;
  product.desc = desc.value;
  product.size = select.value;
  product.imgUrl = productImage;
  console.log("after update", product);

  localStorage.setItem("products", JSON.stringify(products));
  setTimeout(() => {
    window.location = "index.html";
  }, 1000);
}

// uploadImage
function uploadImg() {
  let file = this.files[0];
  let types = ["image/jpeg", "image/png"];

  if (types.indexOf(file.type) == -1) {
    alert("Type not Supported");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Image not Exced 2MG");
    return;
  }

  getImageBase64(file);
  // productImage = URL.createObjectURL(file);
}

function getImageBase64(file) {
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    productImage = reader.result;
  };

  reader.onerror = function () {
    alert("Error !!");
  };
}
