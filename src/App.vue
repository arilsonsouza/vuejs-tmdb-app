<template>
  <div id="app" class="app-bg">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-12">
            <app-navbar/>
        </div>
      </div>
    </div>
    <router-view/>
    <footer>
      <div class="container-fluid">
        <div class="row">
        <div class="col-12 text-center">
          <a href="">
            <svg 
               viewBox="0 0 50 50" 
               width="50"
               
               enable-background="new 0 0 50 50">
               <path fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    fill="#3fd275"
                    d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/>
          </svg>
          Ver código fonte
          </a>

        </div>
      </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    appNavbar: Navbar
  }
};
</script>

<style>
#app {
  animation: fadein ease-out 1.4s;
}
.app-bg {
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.85) 15%,
    rgba(0, 0, 0, 0.2) 40%,
    #000 90%
  );
  background-attachment: fixed;
  height: 100%;
}

footer {
  color: #fff;
}

footer a {
  color: #fff;
}

footer a:hover {
  color: #3fd275;
  text-decoration: none;
  font-family: "Lato", sans-serif;
}
</style>
