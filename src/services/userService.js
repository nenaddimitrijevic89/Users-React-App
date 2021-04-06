export const UserService = {
  
  getUsers: () => fetch("https://jsonplaceholder.typicode.com/users"),

  getUser: (id) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`),

  deleteUser: (id) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    }),

  createUser: (data) =>
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  editUser: (data, id) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
};
