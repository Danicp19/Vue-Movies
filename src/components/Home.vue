<script setup lang="ts">
import { ref, onMounted, computed, watch, onUpdated, methods } from "vue";

import { useMovieStore } from "../store/index";

const store = useMovieStore();
const sendId = (data) => {
  store.fetchMovieDetails(data);
};

const setFavorite = (data) => {
  store.addMovieFavorite(data);
};
</script>

<template>
  <div class="flex mt-5 mx-10 grid grid-cols-5 gap-x-1 gap-y-4">
    <div v-if="store.movies.length > 0" v-for="movie in store.movies" class="relative">
      <router-link v-on:click="sendId(movie.imdbID)" :to="`/movie/${movie.imdbID}`">
        <div
          class="h-72 w-56 rounded-2xl bg-cover"
          :style="{ backgroundImage: `url(${movie.Poster})` }"
        ></div>

        <div class="w-56 text-gray-500">{{ movie.Title }}</div>
      </router-link>

      <button
        v-on:click="
          setFavorite({ title: movie.Title, id: movie.imdbID, img: movie.Poster })
        "
        class="absolute top-2 left-48 text-gray-600 text-opacity-70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-7 h-7 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
