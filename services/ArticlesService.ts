/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  index(pageNumber: number) {
    return Api().get(`articles?page=${pageNumber}`);
  },
  detail(id: string | string[] | undefined) {
    return Api().get(`articles/${id}`);
  },
};
