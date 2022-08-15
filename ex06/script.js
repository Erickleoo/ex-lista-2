let inputType = document.querySelector(".product-type");
let inputBrand = document.querySelector(".product-brand");
let inputPrice = document.querySelector(".product-price");
let productList = document.querySelector(".product-list");
let buttonSearch = document.querySelector(".button-search");

buttonSearch.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const type = inputType.value;
  const brand = inputBrand.value;
  const price = Number(inputPrice.value);
  searchProducts(type, brand);
}

function searchProducts(type, brand) {
  fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}&product_type=${type}`)
    .then(response => response.json())
    .then((datas) => {
      const products = datas.map((data) => ({
        img: data.image_link,
        product: data.product_type,
        brand: data.brand,
        price: data.price
      }));
      showProducts(products);
    });
};

function showProducts(products) {
  const displayProducts = products.map((prod) => `
    <div class="product-card">
      <div class="product-img">
        <img src="${prod.img}" alt="">
      </div>
      <div class="product-info">
        <p>Produto: <strong>${prod.product}</strong></p>
        <p>Marca: <strong>${prod.brand}</strong></p>
        <p>Preço: <strong>${prod.price}</strong></p>
      <div>
    </div>
  `).join("");
  let li = document.createElement("li");
  li.innerHTML = displayProducts;
  productList.appendChild(li);
}