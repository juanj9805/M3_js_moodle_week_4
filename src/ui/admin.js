import * as State from "../state/state.js";
import * as Session from "../state/session.js";
import * as Api from "../data/api.js";

const logout = document.querySelector("#logout");
const toLanding = document.querySelector("#toLanding");
if (toLanding) {
  toLanding.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "index.html";
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

const bodyContainer = document.querySelector("#bodyContainer");
const renderUsersData = async function () {
  const bodyContainer = document.querySelector("#bodyContainer");
  const bannerUserName = document.querySelector("#user-name");
  const userData = await Api.getUsers();
  // I need to add the name of the user
  bannerUserName.textContent = `Welcome back`;

  userData.forEach((user) => {
    const html = `
          <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>
                <button class="btn btn-outline-primary">Update</button>
                <button class="btn btn-outline-danger">Delete</button>
                </td>
                </tr>
        `;
    bodyContainer.innerHTML += html;
  });
  
};

const renderProductsData = async function () {
  const bodyContainer = document.querySelector("#bodyContainer");
  const userData = await Api.getProducts();
  // I need to add the name of the user

  userData.forEach((product) => {
    const html = `
          <tr>
              <td>${product.name}</td>
              <td>${product.category}</td>
              <td>${product.description}</td>
              <td>${product.cost}</td>
              <td>${product.stock}</td>
              <td>${product.status}</td>
              <td>
                <button class="btn btn-outline-primary">Update</button>
                <button class="btn btn-outline-danger">Delete</button>
                </td>
                </tr>
        `;
    bodyContainer.innerHTML += html;
  });
  
};

if(bodyContainer){
  bodyContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("btn-outline-primary")){
      alert("update")
    }
  })
}

if(bodyContainer){
  bodyContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("btn-outline-danger")){
      alert("delete")
    }
  })
}



const usersNav = document.querySelector("#usersNav")
const productsNav = document.querySelector("#productsNav")
const mainContent = document.querySelector("#mainContent")

usersNav.addEventListener("click", async function(e){
  e.preventDefault()
  mainContent.innerHTML = ""
  const html = `
  <div class="row d-flex justify-content-between align-items-center">
            <div class="col col-6">
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search...."
                />
                <button class="btn btn-outline-primary">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>
            <div class="col col-auto">
              <img
                class="img-fluid rounded-circle"
                src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                style="width: 60px"
                alt=""
              />
            </div>
          </div>
          <div class="row d-flex justify-content-between my-5">
            <div class="col-auto">
              <h3 id="user-name"></h3>
            </div>
            <div class="col-auto">
              <button class="btn btn-outline-success">
                <i class="bi bi-plus">Create user</i>
              </button>
            </div>
          </div>
          <div class="row d-flex gap-5 justify-content-center my-5">
            <div class="card col-5 rounded bg-light p-3">
              <div class="card-body">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <h4>Start</h4>
                  <i class="bi bi-book"></i>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  doloribus molestiae amet laborum? Nulla, eligendi libero,
                  maxime tempore quos ullam sed natus obcaecati et voluptate
                  voluptas excepturi exercitationem veniam assumenda! Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Quas
                  doloribus molestiae amet laborum? Nulla, eligendi libero,
                  maxime tempore quos ullam sed natus obcaecati et voluptate
                  voluptas excepturi exercitationem veniam assumenda!
                </p>
              </div>
            </div>
            <div class="card col-5 rounded bg-light p-3">
              <div class="card-body">
                <div
                  class="d-flex justify-content-between align-items-center mb-3"
                >
                  <h4>Start</h4>
                  <i class="bi bi-book"></i>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  doloribus molestiae amet laborum? Nulla, eligendi libero,
                  maxime tempore quos ullam sed natus obcaecati et voluptate
                  voluptas excepturi exercitationem veniam assumenda! Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Quas
                  doloribus molestiae amet laborum? Nulla, eligendi libero,
                  maxime tempore quos ullam sed natus obcaecati et voluptate
                  voluptas excepturi exercitationem veniam assumenda!
                </p>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col col-11 bg-dark text-light rounded p-3">
              <h3>Users</h3>
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody id="bodyContainer"></tbody>
              </table>
            </div>
          </div>
  `
  mainContent.innerHTML = html
  await renderUsersData()
})

mainContent.addEventListener("click", function(e){
  if(e.target.classList.contains("bi-plus")){
    e.preventDefault()
    alert("create user")
  }
})

if(productsNav){
  productsNav.addEventListener("click",async function(e){
    e.preventDefault()
    mainContent.innerHTML = ""
    const html = `
    <div class="row d-flex justify-content-center">
      <div class="col col-11 bg-dark text-light rounded p-3">
        <h3>Users</h3>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>DESSCRIPTION</th>
              <th>COST</th>
              <th>STOCK</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody id="bodyContainer"></tbody>
        </table>
      </div>
    `
    mainContent.innerHTML = html
    await renderProductsData()

  })
}

