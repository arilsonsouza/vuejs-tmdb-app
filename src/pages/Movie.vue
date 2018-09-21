<template>

<div class="container">
    <div class="col-xs-12 movie-card">
        <div class="row" v-if="movie && !notFound" v-cloak>
            <div class="poster-container nopadding col-xs-12 col-md-4 col-lg-5">
                  <img class="align-self-start mr-3 poster" id="postertest" :src="`${movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://via.placeholder.com/450x650'}`">
            </div>
             <div class="movie-data-container col-xs-12 col-md-8 col-lg-7">
                <h1>{{movie.title}}</h1>
                <span class="tagline">{{ movie.tagline ? movie.tagline : '' }}</span>
                <p>{{ movie.overview }}</p>
                <span class="genre-list">
                  {{ movie.genres ? movie.genres.map(item => item.name).join(', ') : null }}
                </span>
                <span class="production-companies">
                  {{ movie.production_companies ? movie.production_companies.map(item => item.name).join(', ') : null}}
                </span>

                <div class="container">
                  <div class="row release-details">
                    <div class="col-xs-6 col-md-6 col-lg-6 nopadding-legth">
                      Lançamento original:
                      <span class="meta-data">
                        {{ movie.release_date }}
                      </span>
                    </div>
                    <div class="col-xs-6 col-md-6 col-lg-6 nopadding-legth">
                      Tempo de execução:
                      <span class="meta-data">
                        {{ movie.runtime}} minutos
                      </span>
                    </div>
                    <div class="col-xs-6 col-md-6 col-lg-6 nopadding-legth">
                      Receita:
                      <span class="meta-data">
                        {{ movie.revenue | currency }}
                      </span>
                    </div>
                    <div class="col-xs-6 col-md-6 col-lg-6 nopadding-legth">
                      Média dos votos:
                      <span class="meta-data">
                        {{ movie.vote_average }} / 10
                      </span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: "Movie",

  watch: {
    movie() {
      this.changeBodyBackground();
    },
    movieId() {
      this.$store.dispatch("movieDetails", this.movieId);
    },
    notFound() {
      if (this.notFound) {
        console.log("/404");
        this.$router.push({ name: "NotFound" });
      } else {
        this.changeBodyBackground();
      }
    }
  },

  methods: {
    changeBodyBackground() {
      if (this.movie.backdrop_path) {
        const body = document.body;
        const imageUrl = `https://image.tmdb.org/t/p/original${
          this.movie.backdrop_path
        }`;
        body.style.backgroundImage = "";
        body.style.backgroundImage = `url(${imageUrl})`;
      }
    }
  },
  computed: {
    movie() {
      return this.$store.getters.getMovie;
    },
    movieId() {
      return this.$route.params.movieId;
    },
    notFound() {
      return this.$store.getters.getNotFound;
    }
  },
  created() {
    this.$store.dispatch("movieDetails", this.movieId);
  }
};
</script>

<style scoped>
.nopadding-legth {
  padding: 0 !important;
}

.poster {
  width: 100%;
  /* max-width: 380px; */
}

.movie-card {
  margin-top: 2rem;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 !important;
}

.movie-data-container {
  padding: 25px;
  color: #fff;
}

.movie-data-container h1 {
  text-transform: uppercase;
  font-weight: 700;
}

.tagline,
.genre-list,
.production-companies,
.meta-data {
  font-family: "Oswald", sans-serif;
}

.tagline {
  color: #3fd275;
  padding-bottom: 0.25em;
  display: block;
  font-size: 1.4em;
}

.genre-list {
  display: block;
  font-size: 1.4em;
  color: #3fd275;
}

.production-companies {
  display: block;
  padding-bottom: 20px;
}

.release-details div:nth-child(n + 3) {
  margin-top: 20px;
}

.meta-data {
  display: block;
  font-size: 1.6em;
  line-height: 1.1em;
  color: #3fd275;
}
</style>