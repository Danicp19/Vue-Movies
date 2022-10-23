<script setup lang="ts">
import Searcher from "../components/Searcher.vue";

import { useMovieStore } from "../store/index";

const store = useMovieStore();

const sendId = (data) => {
  store.fetchMovieDetails(data);
};
const removeFavorite = (data) => {
  store.removeMovieFavorite(data);
};
</script>

<template>
  <div class="flex mt-5 mx-10 grid grid-cols-5 gap-x-1 gap-y-4">
    <div
      v-if="store.favorites.length > 0"
      v-for="movie in store.favorites"
      class="relative"
    >
      <router-link v-on:click="sendId(movie.id)" :to="`/movie/${movie.id}`">
        <div
          class="h-72 w-56 rounded-2xl bg-cover"
          :style="{ backgroundImage: `url(${movie.img})` }"
        ></div>

        <div class="w-56 text-gray-500">{{ movie.title }}</div>
      </router-link>

      <button
        v-on:click="removeFavorite(movie.id)"
        class="absolute top-2 left-48 text-white "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.0"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
