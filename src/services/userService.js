import { baseUrl } from "../shared/baseUrl";
import { User } from "../entities/user";
import { ERROR_CREATE, ERROR_UPDATE, SUCCESS, SUCCESS_EDIT } from "../shared/constants";

export const userService = {
  getUsers: () =>
    fetch(baseUrl)
      .then((response) => response.json())
      .then((response) => {
        const users = response.map((user) => new User(user));
        return users;
      }),

  getUser: (id) =>
    fetch(`${baseUrl}/${id}`)
      .then((response) => response.json())
      .then((user) => new User(user)),

  deleteUser: (id) =>
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    }),

  createUser: (data) =>
    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      console.log(response)
      if (response.status === 201) {
        console.log(SUCCESS)
        return SUCCESS;
      } else {
        return ERROR_CREATE;
      }
    }),

  editUser: (data, id) =>
    fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        return SUCCESS_EDIT;
      } else {
        return ERROR_UPDATE;
      }
    }),
};
