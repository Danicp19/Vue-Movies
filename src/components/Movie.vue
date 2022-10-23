<script setup lang="ts">
import {
  ref,
  onMounted,
  computed,
  watch,
  onUpdated,
  methods,
  onUpdate,
  props,
} from "vue";
import Searcher from "../components/Searcher.vue";
//import users store
import { useMovieStore } from "../store/index";
// declare store variable
const store = useMovieStore();
</script>

<template>
  

  <h1 class="bg-gray-300">{{ store.detail.Title }}</h1>
  <h1 class="bg-gray-300">{{ store.detail.Year }}</h1>
  <h1 class="bg-gray-300">{{ store.detail.Released }}</h1>
  <h1 class="bg-gray-300">{{ store.detail.Genre }}</h1>
  <h1 class="bg-gray-300">{{ store.detail.Director }}</h1>
  <h1 class="bg-gray-300">{{ store.detail.Actors }}</h1>
  <div
    class="h-96 m-4 w-72"
    :style="{ backgroundImage: `url(${store.detail.Poster})` }"
  ></div>
</template>

<style scoped></style>
