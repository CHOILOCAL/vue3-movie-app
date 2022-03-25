<template>
    <div class="container">
        <div class="inner">
            <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
        </div>
    </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
export default {
    components: {
        MovieItem
    },
    computed: {
        movies() {
            console.log(this.$store.state.movie.movies)
            return this.$store.state.movie.movies
        }
    }
}
</script>