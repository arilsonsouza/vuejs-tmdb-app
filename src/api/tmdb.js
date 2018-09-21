const apiKey = process.env.TMDB_API_KEY;
const language = 'pt-BR';

export default {
    search(query) {
        return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${query}`);
    },

    movieDetails(movieId) {
        return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}`);
    },

    nowPlaying() {
        return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=${language}`);
    }
}