import axios from "axios"

export const Api = axios.create({
          baseURL: "https://vbuttini-repository.herokuapp.com/",
});