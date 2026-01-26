import * as Api from "./../data/api.js";
import * as State from "./../state/state.js";
import * as Session from "./../state/session.js";

const sendButton = document.querySelector("#sendBtn");

sendButton.addEventListener("click", async function () {
  const inputPassword = document.querySelector("#password");
  const inputEmail = document.querySelector("#email");

  const users = await Api.getUsers();

  const userFound = users.find(
    (user) =>
      inputEmail.value === user.email && inputPassword.value === user.password,
  );

  if (userFound) {
    State.setAuth(true);
    Session.setAuth(State.state.isAuthenticated);
    Swal.fire({
      title: "Welcome!",
      text: "You clicked the button!",
      icon: "success",
    });
    setTimeout(() => {
      window.location.href = "admin.html";
    }, 2000);
  } else {
    Swal.fire({
      title: "Error!",
      text: "You clicked x the button!",
      icon: "error",
    });
  }
});
