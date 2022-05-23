var products = JSON.parse(localStorage.getItem("products"));

products.forEach(function (el, index) {
  var box = document.createElement("div");
  box.setAttribute("class", "box");
  document.querySelector("#all_products").append(box);

  var image = document.createElement("img");
  image.setAttribute("src", el.image);
  image.style.height = "300px";
  image.style.width = "300px";

  var type = document.createElement("p");
  type.innerText = el.type;

  var desc = document.createElement("p");
  desc.innerText = el.desc;

  var price = document.createElement("p");
  price.innerText = el.price;

  var remove = document.createElement("button");
  remove.innerText = "REMOVE";
  remove.style.color = "red";
  remove.setAttribute("id", "remove_product");

  remove.addEventListener("click", function_remove);

  function function_remove() {
    products.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(products));

    window.location.reload();
  }

  box.append(image, type, desc, price, remove);
});

document
  .querySelector("#add_more_product")
  .addEventListener("click", function_button);

function function_button() {
  window.location.href = "index.html";
}
