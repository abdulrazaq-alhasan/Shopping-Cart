// Get data from localstrage
let user_name = localStorage.username;
let user_email = localStorage.email;
let products = JSON.parse(localStorage.products) || productsDB;
let myProducts = products.filter(item => item.isNew == 'yes')

// VArialbles
let user_dom = document.querySelector('.username')
let email_dom = document.querySelector('.email')
let productsLenght = document.querySelector('.productsLength span')

user_dom.innerHTML = user_name
email_dom.innerHTML = user_email
if(myProducts.length != '') {
    productsLenght.innerHTML = myProducts.length;

}else{
    productsLenght.remove()
}