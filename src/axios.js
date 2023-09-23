import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
instance.get("movie/top_rated", {
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTY1ZjY5ZDQ5NzMxMmVlMjlhMWM4OWMzYThiNjZiNiIsInN1YiI6IjY0YTliOTc1YjY4NmI5MDBlZGY5MGM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iNOfhtN8cAxuDRYUAsWOMKZ53YorKqFTGnk3uGbGpoY",
  },
});

export default instance;
