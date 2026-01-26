import * as State from "../state/state.js";
import * as Session from "../state/session.js";
import * as Api from "../data/api.js";

const cardsContainer = document.querySelector("#cardsContainer");
const logout = document.querySelector("#logout");
const toPanel = document.querySelector("#toAdminPanel");

if (toPanel) {
  toPanel.addEventListener("click", function (e) {
    e.preventDefault();
    window.location = "admin.html";
  });
}

if (logout) {
  logout.addEventListener("click", function (e) {
    e.preventDefault();
    Session.clearAuth();
    State.setAuth(false);
    window.location = "login.html"; 
  });
}

window.addEventListener("DOMContentLoaded", async function () {
  const products = await Api.getProducts();

  products.forEach((product) => {
    cardsContainer.innerHTML += `
    <div class="col-lg-3 col-md-4 col-sm-6">
      <div class="card h-100 shadow-sm">
        <div class="card-header bg-primary">
          <h3 class="text-white text-center">${product.name}</h3>
        </div>

        <div class="card-body p-3 d-flex flex-column">
          <img
            class="img-fluid w-50 mx-auto mb-3 h-50"
            src="${product.urlImg}"
          />
          <span>${product.category}</span>
          <p>$${product.price}</p>
          <p>${product.description}</p>

          <button class="btn btn-outline-primary mt-auto">Buy</button>
        </div>
      </div>
    </div>
  `;
  });
});
