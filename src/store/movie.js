import axios from 'axios';
import _uniqBy from 'lodash/uniqBy'

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
                state[key] = payload [key]
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
        async searchMovies({state, commit}, payload) {
            // const { title, type, year, number } = payload
            const OMDB_API_KEY = '7035c60c'
            // const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}$page=1`)
            // TODO: 변경 (비동기)
            const res = await _fetchMovie({
                ...payload,
                page: 1
            })
            const { Search, totalResults } = res.data
            commit('updateState', {
                movies: _uniqBy(Search, 'imdbID'),
            })
            const total = parseInt(totalResults, 10)
            const pageLength = Math.ceil(total / 10)

            // 추가 요청
            if (pageLength > 1) {
                for (let page = 2; page <= pageLength; page += 1) {
                    if (page > (payload.number / 10)) break;
                    // const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}$page=${page}`)
                    // TODO: 변경 (비동기)
                    const res = await _fetchMovie({
                        ...payload,
                        page
                    })
                    const { Search } = res.data
                    commit('updateState', {
                        movies: [...state.movies, ... _uniqBy(Search, 'imdbID')]
                    })
                }
            }

        }
    },
}

// '_' 현재 파일에서만 사용
function _fetchMovie(payload) {
    const { title, type, year, page } = payload
    const OMDB_API_KEY = '7035c60c'
    const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}$page=${page}`

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                resolve(res)
            }).catch((err) => {
            reject(err.message)
        })
    })
}