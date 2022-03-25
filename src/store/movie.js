import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        movies: [],
        message: '',
        loading: false
    }),
    mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
                state.message = payload.message
                state.loading = false;
            })
        },
        resetMovies(state) {
            state.movies = []
            state.message = '';
            state.loading = false;
        }
    },
    actions: {
        async searchMovies(context, payload) {
            const { title, type, year, number } = payload
            // Search movies...
            const OMDB_API_KEY = '7035c60c'
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}$page=1`)
            const { Search, totalResults } = res.data
            context.commit('updateState', {
                movies: Search,
            })
        }
    },
}