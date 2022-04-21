let products = JSON.parse(localStorage.products);
let id = localStorage.id;

let itemDetails = document.querySelector(".item-details");

let product = products.find((item) => item.id == id);
console.log(product);

itemDetails.innerHTML = `
    <img src="${product.imgUrl}" />
    <h2>Title: ${product.title}</h2>
    <p>Description: ${product.desc}</p>
    <span>Size: ${product.size}</span> <br>
    <span>Quantity: ${product.qty}</span> <br> <br> 
    <buuton onclick="editProduct(${id})" class="edit-btn">Edit</button>
`;

// Edit Product
function editProduct(id) {
    console.log('id', id);
    localStorage.setItem('editID', id)
    window.location = "editProduct.html"
}

