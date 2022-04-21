// Variables
let ProductName = document.getElementById("name");
let desc = document.getElementById("description");
let select = document.querySelector("select");
let form = document.querySelector("form");
let imgInput = document.getElementById("upload-img");
let productSize;
let productImage;

// Events
select.addEventListener("change", getSize);
form.addEventListener("submit", createProduct);
imgInput.addEventListener("change", uploadImg);

// Functions
function getSize(e) {
  productSize = e.target.value;
}

function createProduct(e) {
  e.preventDefault();
  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = ProductName.value;
  let descValue = desc.value;

  if (nameValue && descValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1,
      qty: 1,
      imgUrl: productImage,
      size: productSize,
      title: nameValue,
      desc: descValue,
      isNew: "yes",
    };

    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));

    ProductName.value = "";
    desc.value = "";
    select.value = "";

    setTimeout(() => {
      window.location = "index.html";
    }, 500);
  } else {
    alert("Enter Data ..");
  }
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
