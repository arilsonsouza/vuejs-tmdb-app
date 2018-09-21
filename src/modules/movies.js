import TMDB_API from '../api/tmdb';

export default {
    state: {
        results: [],
        movie: {},
        nowPlaying: {},
        notFound: false
    },

    getters: {
        getResults(state) {
            return state.results;
        },

        getMovie(state) {
            return state.movie;
        },

        getNotFound(state) {
            return state.notFound;
        },

        getNowPlaying(state) {
            return state.nowPlaying;
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
                    context.commit('notFound', false);
                    context.commit('movie', data);
                }).catch(error => {
                    context.commit('notFound', true);
                    context.commit('movie', {});
                });
        },

        nowPlaying(context) {
            TMDB_API.nowPlaying()
                .then(resp => {
                    console.log(resp.data);
                    context.commit('nowPlaying', resp.data);
                }).catch(error => {
                    console.log(error);
                })
        }
    },

    mutations: {
        results(state, payload) {
            state.results = payload;
        },
        movie(state, payload) {
            state.movie = payload;
        },

        notFound(state, payload) {
            state.notFound = payload;
        },

        nowPlaying(state, payload) {
            state.nowPlaying = payload;
        }
    }
}