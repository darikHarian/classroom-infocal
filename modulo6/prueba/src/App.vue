<template>
  <div id="app">
    <img id="logo" src="logo.png" alt="Logo Pokemon">
    <h1>¿Quién es ese Pokémon?</h1>
    <h3>Pokemones descubiertos: <span id="discoveredCounter">{{ discoveredCounter }}</span></h3>
    <div id="cards">
      <div v-for="(pokemon, i) in pokedex" :key="i" class="pokeCards">
        <PokedexInfo
          :char="pokemon"
          :index="i"
          @compareNames="compareNames"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PokedexInfo from './components/PokedexInfo.vue'

export default {
  name: 'App',
  components: {
    PokedexInfo
  },
  data() {
    return {
      pokemons: [],
      pokedex: [],
      discoveredCounter: 0
    }
  },
  async mounted() {
    const dataUrl = 'https://pokeapi.co/api/v2/pokemon';
    const {data:pokemonsData} = await axios.get(dataUrl);
    this.pokemons = pokemonsData.results;
    this.pokemons.forEach(async (pokemon) => {
      const {data:pokemonData} = await axios.get(pokemon.url);
      const pokeData = {
        id: pokemonData.id,
        name: pokemonData.name,
        imgUrl: pokemonData.sprites.front_default,
        discovered: false
      }
      this.pokedex.push(pokeData);
    });
  },

  methods: {
    compareNames({pokemon, index}) {
      if(this.pokedex[index].name == pokemon) {
        this.pokedex[index].discovered = true; 
        this.discoveredCounter++;
      } else {
        alert( 'No es ese pokemon' );
      }
    }
  },

  computed: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#logo {
  width: 200px;
}

#discoveredCounter {
  color: darkgoldenrod;
  font-weight: bold;
}

#cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 150px;
  width: 90vw;
  row-gap: 20px;
  margin: 0 auto;
}

.pokeCards {
  width: 100px;
  margin: 0 auto;
}
</style>
