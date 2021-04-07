import { baseUrl } from "../shared/baseUrl";
import { User } from "../entities/user";

export const userService = {
  getUsers: () =>
    fetch(baseUrl)
      .then((response) => response.json())
      .then((response) => {
        const users = response.map((user) => new User(user));
        return users;
      }),

  getUser: (id) => fetch(`${baseUrl}/${id}`),

  deleteUser: (id) =>
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    }),

  createUser: (data) =>
    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  editUser: (data, id) =>
    fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),
};
