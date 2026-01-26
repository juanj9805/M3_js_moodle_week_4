// Auth
const saveSession = function (isLogged) {
  if (!isLogged) return;

  sessionStorage.setItem("isLogged", "true");
  return true;
};

const closeSession = function (isLogged) {
  if (!isLogged) return;

  sessionStorage.setItem("isLogged", "false");
  return true;
};

export { saveSession, closeSession };
