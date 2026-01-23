const logout = document.querySelector("#logout");
const toLanding = document.querySelector("#toLanding");

toLanding.addEventListener("click", function () {
  window.location = "index.html";
});

logout.addEventListener("click", function () {
  sessionStorage.removeItem("isLogged");
  window.location = "login.html";
});

const getUserData = async function () {
  const url = "http://localhost:4000/users";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const renderUserData = async function () {
  const bodyContainer = document.querySelector("#bodyContainer");
  const userData = await getUserData();

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
