/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";

export default {
  index(pageNumber: number) {
    return Api().get(`articles?page=${pageNumber}`);
  },
  indexAll(pageNumber: number) {
    return Api().get(`admin/articles?page=${pageNumber}`);
  },
  detail(articleId: string | string[] | undefined) {
    return Api().get(`articles/${articleId}`);
  },
  comment(articleId: string | string[] | undefined, body: any) {
    return Api().post(`/articles/${articleId}/comments`, body);
  },
  create(body: any) {
    return Api().post("/articles", body);
  },
};
