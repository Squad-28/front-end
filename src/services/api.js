import axios from "axios";

export const api = axios.create({
  baseURL: "https://squad-28-technical-share.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const isToken = false;

    if (isToken) {
      config.headers.Authorization = "Bearer" + isToken;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  async (response) => {
    //console.log(response);

    return response;
  },
  function (err) {
    console.error(err);
    return Promise.reject(err);
  }
);
