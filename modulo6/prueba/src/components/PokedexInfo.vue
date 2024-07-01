<template>
    <div id="PokedexInfo">
        <img class="pokeImg" :src="char.imgUrl" :class="{filter: !char.discovered}">
        <p v-show="char.discovered" class="pokeName">{{ char.name }}</p>
        <input type="text" v-show="!char.discovered" v-model="pokemon" class="pokeInput">
        <button
            v-show="!char.discovered"
            @click="$emit('compareNames', {pokemon, index})"
            class="discoverButton">
            Descubrir
        </button>
    </div>
</template>

<script>
export default {
    props: ['char', 'index'],
    data() {
        return {
            pokemon: ""
        }
    }
}
</script>

<style>
    .pokeImg {
        width: 120px;
        margin: 0 auto;
    }

    .filter {
        filter: blur(5px) grayscale(100%);
    }

    .pokeName {
        margin: 0 auto 10px;
        width: 120px;
    }

    .pokeInput {
        width: 110px;
        margin: 0 auto;
    }

    .discoverButton {
        margin-top: 10px;
        width: 120px;
        margin: 5px auto;
    }
</style>