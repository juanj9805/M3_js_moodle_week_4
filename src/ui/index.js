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
    <div class="card" style="width: 18rem;">
      <img src="${product.urlImg}" class="card-img-top w-75 h-75 mx-auto p-3" alt="...">
      <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.category}</p>
        <p class="card-text">${product.description}</p>
        <p class="card-text">${product.price}</p>
        <button class="btn btn-outline-success mt-auto">Ask for it</button>
      </div>
    </div>
  `;
  });
});
