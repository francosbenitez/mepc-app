/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  register(form: any) {
    return Api().post("/register", form);
  },
  login(form: any) {
    return Api().post("/login", form);
  },
  logout() {
    return Api().post("/logout");
  },
  verifyToken() {
    return Api().post("/verify-token");
  },
  users() {
    return Api().get("/users");
  },
};
