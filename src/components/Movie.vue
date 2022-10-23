<script setup lang="ts">
import { useMovieStore } from "../store/index";

const store = useMovieStore();
</script>

<template>
  <div class="flex flex-col justify-center items-center pb-40 bg-black bg-opacity-10">
    <div
      class="h-96 m-4 w-72 rounded-2xl bg-cover"
      :style="{ backgroundImage: `url(${store.detail.Poster})` }"
    ></div>

    <div class="w-72 text-gray-600">
      <span class="font-bold text-gray-600">Title: </span>{{ store.detail.Title }}
    </div>

    <div class="w-72 text-gray-600">
      <span class="font-bold text-gray-600">Released Year: </span
      >{{ store.detail.Released }}
    </div>
    <div class="w-72 text-gray-600">
      <span class="font-bold text-gray-600">Genre: </span>{{ store.detail.Genre }}
    </div>
    <div class="w-72 text-gray-600">
      <span class="font-bold text-gray-600">Director: </span>{{ store.detail.Director }}
    </div>
    <div class="w-72 text-gray-600">
      <span class="font-bold text-gray-600">Actors: </span>{{ store.detail.Actors }}
    </div>
  </div>
</template>

<style scoped></style>
