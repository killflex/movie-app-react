import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_AUTH_BEARER,
  },
});

export default baseApi;
