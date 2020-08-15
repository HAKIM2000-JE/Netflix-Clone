const ApiKey = "0697149ea65326dc3659c54195aace8a";

const Request = {
  fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${ApiKey}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${ApiKey}&with_genres=99`,
};

export default Request;
