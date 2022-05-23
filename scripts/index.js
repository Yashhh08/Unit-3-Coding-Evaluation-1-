//store the products array in localstorage as "products"
var products = JSON.parse(localStorage.getItem("products")) || [];

document.querySelector("#products").addEventListener("submit", function_submit);

function function_submit() {
  event.preventDefault();

  function Object(type, desc, price, image) {
    (this.type = type),
      (this.desc = desc),
      (this.price = price),
      (this.image = image);
  }

  var form = document.querySelector("#products");

  var type = form.type.value;
  var desc = form.desc.value;
  var price = form.price.value;
  var image = form.image.value;

  console.log(type, desc, price, image);

  var input_data = new Object(type, desc, price, image);

  products.push(input_data);

  console.log(input_data);

  localStorage.setItem("products", JSON.stringify(products));

  window.location.reload();
}

document
  .querySelector("#show_products")
  .addEventListener("click", function_button);

function function_button() {
  window.location.href = "inventory.html";
}
