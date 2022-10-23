<script setup lang="ts">
import { ref, onMounted, computed, watch, onUpdated, methods } from "vue";
import Searcher from "../components/Searcher.vue";
//import users store
import { useMovieStore } from "../store/index";
// declare store variable
const store = useMovieStore();




const buscar = (data) => {
  store.fetchMovieDetails(data);
  console.log(data)
};

//console.log(store.movies.Search)


</script>




<template>
  <Searcher />
  <h1>hola home</h1>

  <div v-if="store.movies.length > 0" v-for="movie in store.movies">
    <router-link   v-on:click="buscar(movie.imdbID)"  :to="`/movie/${movie.imdbID}`" class="px-2">
    
      <div
        class="h-96 m-4 w-72"
        :style="{ backgroundImage: `url(${movie.Poster})` }"
      >
      </div>
      <div class="m-4 w-72 bg-gray-200">{{ movie.Title }}</div>
    </router-link>
  </div>
</template>

<style scoped></style>

// //store.img o store.lo que sea para usar lo qeu esta guardado en mi estado //
//https://www.omdbapi.com/?apikey=625c162c&s=titanic
