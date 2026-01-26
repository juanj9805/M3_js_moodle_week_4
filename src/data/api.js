const baseUrl = `http://localhost:4000`;

// Users

const getUsers = async function () {
  const response = await fetch(`${baseUrl}/users`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
};

const createUser = async function (user) {
  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!user) {
    throw new Error("createUser requires a user object");
  }
  return response.json();
};

//Products

const getProducts = async function () {
  const response = await fetch(`${baseUrl}/products`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
};

const createProduct = async function (product) {
  const response = await fetch(`${baseUrl}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!product) {
    throw new Error("createUser requires a user object");
  }
  return response.json();
};

export { getUsers, createUser, getProducts, createProduct };

// If any other file touches localStorage → FAIL
