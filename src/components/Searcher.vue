<script setup lang="ts">
import { ref, onMounted, computed, watch, onUpdated, methods } from "vue";
//import users store
import { useMovieStore } from "../store/index";
// declare store variable
const store = useMovieStore();

let title = ref("");

const buscar = (data) => {
  store.fetchMovies(data);
};

//console.log(store.movies.Search)


</script>

<template>
  <h1>hola searcher</h1>

  <input type="text" v-model="title" placeholder="Search Movies..." />

  <button v-on:click="buscar(title)" class="bg-cyan-400">search</button>
</template>

<style scoped></style>
