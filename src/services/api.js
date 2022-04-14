import axios from "axios";

export const api = axios.create({
  baseURL: "https://squad-28-technical-share.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
