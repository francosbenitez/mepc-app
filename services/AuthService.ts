/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  register(body: any) {
    return Api().post("/register", body);
  },
  login(body: any) {
    return Api().post("/login", body);
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
