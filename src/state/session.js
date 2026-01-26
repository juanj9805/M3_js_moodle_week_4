const KEY = "isLogged";

function setAuth(value) {
  sessionStorage.setItem(KEY, JSON.stringify(value));
}

function isAuthenticated() {
  const isLogged = sessionStorage.getItem(KEY);
  return isLogged;
}

function clearAuth() {
  sessionStorage.removeItem(KEY);
}

export { setAuth, isAuthenticated, clearAuth };
