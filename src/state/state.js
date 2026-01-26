const state = {
  currentUser: null,
  inventory: [],
  isAuthenticated: false,
};

function setUser(user) {
  state.currentUser = user;
}

function setInventory(items) {
  state.inventory = items;
}

function setAuth(isLogged) {
  state.isAuthenticated = isLogged;
}

export { state, setUser, setInventory, setAuth };
