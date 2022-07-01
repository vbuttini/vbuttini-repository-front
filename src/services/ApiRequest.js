import { Api } from "./Api";

export const post = (url, data) => {
          return Api.post(`${url}`, data);
}

export const get = (url, data) => {
          return Api.get(`${url/`${data}`}`);
}