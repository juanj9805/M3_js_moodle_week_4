import * as Api from "./../data/api.js";

const cardsContainer = document.querySelector("#cardsContainer");
const user = await Api.getProducts();

user.forEach((element) => {
  cardsContainer.innerHTML += `<h1>${element.name}</h1>`;
});

console.log(user);
