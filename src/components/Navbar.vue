<template>
  <div class="search-container container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-lg-5">
        <router-link :to="{name: 'home'}">
          <svg id="svgLogo" viewBox="0 0 50 45" width="50" height="50" fill="#3fd275">
        <title>TMDB Logo</title>
        <path d="M45.0099206,41.3194444 C47.906746,41.3194444 49.8670635,39.359127 49.8670635,36.4623016 L49.8670635,4.85912698 C49.8670635,1.96230159 47.906746,0.00198412698 45.0099206,0.00198412698 L4.85714286,0.00198412698 C1.96031746,0.00198412698 0,1.96230159 0,4.85912698 L0,44.2103175 L2.49206349,41.3214286 L2.49206349,41.3214286 L2.49206349,4.85912698 C2.49424808,3.55383568 3.55185155,2.49623221 4.85714286,2.49404762 L45.0099206,2.49404762 C46.3152119,2.49623221 47.3728154,3.55383568 47.375,4.85912698 L47.375,36.4623016 C47.3728154,37.7675929 46.3152119,38.8251964 45.0099206,38.827381 L8.55357143,38.827381 L6.06150794,41.3194444 L6.04563492,41.2996032"></path>
        <polygon points="12.1785714 15.3353175 13.5555556 15.3353175 13.5555556 9.82539683 15.2698413 9.82539683 15.2698413 8.45833333 10.4642857 8.45833333 10.4642857 9.82539683 12.1785714 9.82539683"></polygon>
        <polygon points="19.7480159 15.3353175 21.125 15.3353175 21.125 8.4484127 19.7480159 8.4484127 19.7480159 11.202381 17.6865079 11.202381 17.6865079 8.4484127 16.3095238 8.4484127 16.3095238 15.3353175 17.6865079 15.3353175 17.6865079 12.5793651 19.7480159 12.5793651"></polygon>
        <polygon points="26.2400794 13.9563492 23.656746 13.9563492 23.656746 12.5793651 25.8630952 12.5793651 25.8630952 11.202381 23.656746 11.202381 23.656746 9.82539683 26.1230159 9.82539683 26.1230159 8.4484127 22.2777778 8.4484127 22.2777778 15.3353175 26.2400794 15.3353175"></polygon>
        <polygon points="13.6230159 20.109127 10.906746 17.0853175 10.4642857 17.0853175 10.4642857 24.077381 11.8611111 24.077381 11.8611111 20.234127 13.6230159 22.0833333 15.3849206 20.234127 15.3769841 24.077381 16.7718254 24.077381 16.7718254 17.0853175 16.3392857 17.0853175"></polygon>
        <path d="M21.4365079,17.077381 C16.6984127,17.077381 16.6984127,24.1746032 21.4365079,24.1746032 C26.1746032,24.1746032 26.1746032,17.077381 21.4365079,17.077381 Z M21.4365079,22.75 C18.6825397,22.75 18.6825397,18.4940476 21.4365079,18.4940476 C24.1904762,18.4940476 24.1904762,22.75 21.4365079,22.75 Z"></path>
        <rect x="32.8115079" y="17.1924603" width="1.37698413" height="6.88492063"></rect>
        <polygon points="36.7202381 22.7003968 36.7202381 21.3234127 38.9265873 21.3234127 38.9265873 19.9464286 36.7202381 19.9464286 36.7202381 18.5694444 39.1865079 18.5694444 39.1865079 17.1924603 35.343254 17.1924603 35.343254 24.077381 39.3035714 24.077381 39.3035714 22.7003968"></polygon>
        <path d="M12.515873,25.9365079 L10.4642857,25.9365079 L10.4642857,32.8214286 L12.515873,32.8214286 C17.0992063,32.8214286 17.0992063,25.9365079 12.515873,25.9365079 Z M12.515873,31.4444444 L11.8412698,31.4444444 L11.8412698,27.3134921 L12.515873,27.3134921 C15.1924603,27.3134921 15.1924603,31.4444444 12.515873,31.4444444 Z"></path>
        <path d="M21.0892857,29.3730159 C21.5218254,29.0753968 21.7063492,28.5357143 21.7242063,28.015873 C21.7539683,26.8015873 20.9920635,25.9265873 19.7698413,25.9265873 L17.0436508,25.9265873 L17.0436508,32.8214286 L19.7698413,32.8214286 C20.3142974,32.8172449 20.8346683,32.5963907 21.2159271,32.2076855 C21.5971859,31.8189803 21.8079344,31.2944352 21.8015873,30.75 C21.8040455,30.202037 21.5379427,29.687621 21.0892857,29.3730159 Z M18.4305556,27.3015873 L19.6547619,27.3015873 C20.0179732,27.3290631 20.2986579,27.6317827 20.2986579,27.9960317 C20.2986579,28.3602808 20.0179732,28.6630004 19.6547619,28.6904762 L18.4305556,28.6904762 L18.4305556,27.3015873 L18.4305556,27.3015873 Z M19.6547619,31.4424603 L18.4305556,31.4424603 L18.4305556,30.0654762 L19.6547619,30.0654762 C19.8383233,30.0611553 20.0157582,30.1316242 20.1463378,30.2607072 C20.2769174,30.3897902 20.3494269,30.5664009 20.3472222,30.75 C20.3499111,30.9346442 20.2778845,31.1125423 20.1474944,31.243306 C20.0171043,31.3740696 19.839413,31.4466051 19.6547619,31.4444444 L19.6547619,31.4424603 Z"></path>
        <polygon points="28.5734127 20.9087302 26.7599206 17.1924603 25.1706349 17.1924603 28.4186508 24.2222222 28.7281746 24.2222222 31.9742063 17.1924603 30.3849206 17.1924603"></polygon>
      </svg>
        </router-link>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-7">
        <div class="searchbox">
         <div class="form-group">
            
            <input type="text"
                   placeholder="Pesquise o titulo do filme"  
                   autocomplete="off" 
                   class="form-control searchbox_input"
                   v-model="query"
                   @input="onChange"
                   @keydown.down="onArrowDown"
                   @keydown.up="onArrowUp"
                   @keydown.enter="onEnter">
            <transition name="fade">
              <ul class="autocomplete-results" v-show="isOpen">
                <li 
                    class="autocomplete-result" 
                    v-for="(result, i) in results" 
                    :key="i" 
                    v-html="highlight(result.title)"
                    @click="goToMoviePage(result.id)"
                    :class="{'is-active' : i === arrowCounter}">
                </li>
              </ul>
            </transition>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      query: "",
      isOpen: false,
      arrowCounter: -1
    };
  },

  methods: {
    onChange() {
      this.isOpen = true;
      if (this.query.length === 0) {
        this.isOpen = false;
      } else if (this.query.length >= 2) {
        this.$store.dispatch("fetchResults", this.query);
      }
    },

    onArrowDown() {
      if (this.arrowCounter < this.results.length - 1 && this.isOpen) {
        this.arrowCounter++;
      }
    },
    onArrowUp() {
      if (this.arrowCounter >= 0 && this.isOpen) {
        this.arrowCounter--;
      }
    },
    onEnter() {
      if (this.arrowCounter >= 0) {
        this.goToMoviePage(this.results[this.arrowCounter].id);
        this.arrowCounter = -1;
      }
    },
    handleClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    goToMoviePage(id) {
      this.isOpen = false;
      this.$router.push({ name: "movie", params: { movieId: id } });
    },

    highlight(title) {
      let term = this.query.replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*");
      let pattern = new RegExp(`(${term})`, "gi");

      title = title.replace(
        pattern,
        '<span style="font-weight: bold;">$1</span>'
      );
      title = title.replace(
        /(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,
        "$1</mark>$2<mark>$4"
      );
      return title;
    }
  },

  computed: {
    results() {
      return this.$store.getters.getResults;
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-container {
  margin-top: 20px;
}

.searchbox_input,
.searchbox_input:focus {
  background: transparent;
  font-family: "Lato", sans-serif !important;
  font-size: 1.2em;
  outline: 0 !important;
  box-shadow: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  border-bottom: 1px solid #fff;
  color: #fff;
  width: 100%;
}

.autocomplete-results {
  list-style: none;
  padding: 0;
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.8);
  width: calc(100% - 30px);
}

.autocomplete-result {
  padding: 1rem;
  color: #fff;
  font-family: "Lato", sans-serif;
  cursor: pointer;
}

.autocomplete-result:hover,
.is-active {
  background-color: #3fd275;
  color: #000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
