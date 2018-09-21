import TMDB_API from '../api/tmdb';

export default {
    state: {
        results: [],
        movie: {}
    },

    getters: {
        getResults(state) {
            return state.results;
        },

        getMovie(state) {
            return state.movie;
        }
    },

    actions: {
        fetchResults(context, query) {
            TMDB_API.search(query)
                .then(res => {
                    let { results } = res.data;
                    context.commit('results', results.slice(0, 4));
                }).catch(error => console.log(error));
        },

        movieDetails(context, movieId) {
            TMDB_API.movieDetails(movieId)
                .then(resp => {
                    const { data } = resp;
                    context.commit('movie', data);
                }).catch(error => {
                    console.log(error);
                    context.commit('movie', null);
                });
        }
    },

    mutations: {
        results(state, payload) {
            state.results = payload;
        },
        movie(state, payload) {
            state.movie = payload;
        }
    }
}