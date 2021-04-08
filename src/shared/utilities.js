import { ERROR_EMAIL, ERROR_LOGIN, SUCCESS, SUCCESS_LOGIN } from "./constants";

export const validateEmail = (email) => {
    if (!email) return;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

export const validationLogin = (email) => {
    const valid = validateEmail(email);
    if(!email || !valid){
      return ERROR_EMAIL;
    }
    const storageEmail = localStorage.getItem("email");
    if (storageEmail === email) {
      return SUCCESS_LOGIN;
    } else if (storageEmail && storageEmail !== email) {
      return ERROR_LOGIN;
    } else {
      localStorage.setItem("email", email);
      return SUCCESS;
    }
  };