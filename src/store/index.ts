import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
const apikey = '625c162c'

export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [],
    detail: [],
    favorites:[],

  }),

  actions: {
    async fetchMovies(title: string) {
      try {
        const data = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&s=${title}`)
        this.movies = data.data.Search
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },
    async fetchMovieDetails(idMovie: string) {
      try {
        const data = await axios.get(`https://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`)
        this.detail = data.data
      }
      catch (error) {
        alert(error)
        console.log(error)
      }


    },
    addMovieFavorite(payload: any) {
      return this.favorites = this.favorites.concat(payload)
    },
    removeMovieFavorite(id: string) {
      return this.favorites = this.favorites.filter(movie => movie["id"] !== id)

    }








  },




})