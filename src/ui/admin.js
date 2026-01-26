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

const renderUserData = async function () {
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
                <button class="btn btn-primary">Update</button>
                <button class="btn btn-danger">Delete</button>
                </td>
                </tr>
        `;
    bodyContainer.innerHTML += html;
  });
};

renderUserData();
