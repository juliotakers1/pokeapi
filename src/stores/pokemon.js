
import { defineStore } from 'pinia'
import axios from 'axios'
export const usePokemonStore = defineStore({
    id: 'pokemonStore',
 state: () => ({
    items: [],
    item: ''
 }),
 actions: {
    async fetchPokemon(id) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((data) => {
            this.item = data.data
        })
    },
    async fetchPokemonAll() {
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then((data) => {
            this.item = data.data
        })
    }
 }
})
