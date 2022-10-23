<script setup lang="ts">
import Searcher from "../components/Searcher.vue";</script>

<template>
  <div class="sticky top-0 z-10 pt-4 h-20 w-full justify-center bg-white/90 backdrop-blur">
    <nav class="w-full flex justify-between items-end     ">
      <div class="flex gap-10 items-end  ">
        <router-link to="/">
          <div class="text-3xl mb-1 ml-6">
            <span class="text-blue-400">V<span>ue</span></span>
            <span class="text-gray-500">M<span>ovies</span></span>
          </div>
        </router-link>
        <router-link to="/">
          <div class="text-lg  mb-1">
            <span class="text-gray-500">Home</span>
          </div>
        </router-link>
        <Searcher />
      </div>
      <router-link to="/favorites/">
        <div class="text-lg mr-20 mb-1 ">
          <span class="text-gray-500">Favorites</span>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<style scoped></style>
