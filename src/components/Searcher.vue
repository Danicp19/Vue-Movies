<script setup lang="ts">
import { ref, onMounted, computed, watch, onUpdated, methods } from "vue";

import { useMovieStore } from "../store/index";

const store = useMovieStore();

const search = (data) => {
  store.fetchMovies(data);
};
</script>

<template>
  <div class="relative">
    <input
      type="text"
      v-model="title"
      placeholder="Search Movies..."
      class="pl-3 h-10 lg:w-72 pr-2 text-left bg-white border border-gray-200 rounded-full shadow hover:shadow-md"
    />

    <button
      v-on:click="search(title)"
      class="bg-blue-300 p-1.5 absolute top-1 right-1 rounded-full text-white shadow hover:shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
