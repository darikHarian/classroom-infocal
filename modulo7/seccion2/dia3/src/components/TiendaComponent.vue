<template>
    <div>
        <h1>Tienda 32 bits</h1>
        <h2>Lista de juegos</h2>
        <table border="1">
            <thead>
                <th>Código</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="(juego, i) in juegos" :key="juego">
                    <td class="gameId">{{juego.codigo}}</td>
                    <td class="gameName">{{juego.nombre}}</td>
                    <td class="gameStock">{{juego.stock}}</td>
                    <td class="gamePrice">${{juego.precio}}</td>
                    <td class="gameActions">
                        <button @click="incrementar(i)">+</button>
                        <button @click="decrementar(i)">-</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'Juegos',
        computed: {
            ...mapState(['juegos'])
        },

        methods: {
            ...mapActions(['incrementar', 'decrementar'])
        }
    }
</script>

<style scoped>
    table {
        margin: 0 auto;
    }

    .gameName, .gameActions {
        padding: 0 50px;
    }

    .gameId, .gameStock, .gamePrice {
        padding: 0 30px;
    }
</style>