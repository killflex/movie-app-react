import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGY1ZDVjNDQ3OGJmOTNhOGQzZjljMmMwYTc3ZGU0NSIsIm5iZiI6MTcyNTU3ODYzMS40NDc1NzIsInN1YiI6IjY2ZGEzN2EyZWMwMTEzZDQ0YzVkYmY1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gu9eQfnpIkRV23sy9YDo0tcnp6fhdVnzO9FqP4PDIwk",
  },
});

export default baseApi;
