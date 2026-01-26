const cardsContainer = document.querySelector("#cardsContainer");
const logout = document.querySelector("#logout");
const toPanel = document.querySelector("#toPanel");

toPanel.addEventListener("click", function () {
  window.location = "admin.html";
});

logout.addEventListener("click", function () {
  sessionStorage.removeItem("isLogged");
  window.location = "login.html";
});

const getData = async function () {
  const url = "http://localhost:4000/products";
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

window.addEventListener("DOMContentLoaded", async function () {
  const products = await getData();

  products.forEach((product) => {
    cardsContainer.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card h-100 shadow-sm">
        <div class="card-header bg-primary">
          <h3 class="text-white text-center">${product.name}</h3>
        </div>

        <div class="card-body p-3 d-flex flex-column">
          <img
            class="img-fluid w-50 mx-auto mb-3"
            src="https://tauretcomputadores.com/images/products/Product_202408261227161196795540.perfilPNG.webp"
          />
          <span>${product.category}</span>
          <p>$${product.price}</p>
          <p>${product.description}</p>

          <button class="btn btn-primary mt-auto">Buy</button>
        </div>
      </div>
    </div>
  `;
  });
});
