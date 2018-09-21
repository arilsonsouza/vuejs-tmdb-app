<template>
    <div class="container mb-4">
      <div class="row mt-2">
        <div class="col-xs-12 col-md-4 col-lg-4">
          <h1 class="text-white" style="font-family: 'Oswald', sans-serif;font-size: 1.5em;">Novos lançamentos</h1>
        </div>
      </div>
        <div class="row">
          <div class="col-xs-6 col-md-3 col-lg-3" 
               v-for="movie in nowPlaying.results" 
               :key="movie.id">
                <router-link :to="{name: 'movie', params:{ movieId: movie.id }}">
                  <img class="mt-4 poster-image" 
                       :src=" movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/500x730'" 
                       :title="movie.title" 
                       />
                </router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Home",

  created() {
    this.$store.dispatch("nowPlaying");
    document.body.style.backgroundImage = "";
  },

  computed: {
    nowPlaying() {
      return this.$store.getters.getNowPlaying;
    }
  }
};
</script>

<style scoped>
.poster-image {
  width: 100%;
  transition: transform 0.2s;
  transition: opacity 0.5s ease, transform 0.5s ease;
  transform: scale(0.95);
  opacity: 1;
}

.poster-image:hover {
  transform: scale(1) translateY(0);
}
</style>