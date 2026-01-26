const logged = sessionStorage.getItem("isLogged");

if (logged != "true") {
  window.location.href = "login.html";
}


