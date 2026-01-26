const sendButton = document.querySelector("#sendBtn");

const getData = async function () {
  const url = "http://localhost:4000/users";
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

sendButton.addEventListener("click", async function () {
  const inputPassword = document.querySelector("#password");
  const inputEmail = document.querySelector("#email");
  const users = await getData();

  const userFound = users.find(
    (user) =>
      inputEmail.value === user.email && inputPassword.value === user.password,
  );

  if (userFound) {
    sessionStorage.setItem("isLogged", "true");
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
