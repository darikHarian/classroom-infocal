<template>
    <div id="app">
      <form>
        <div>
          <label>Título de la tarjeta: </label>
          <input type="text" v-model="cardTitle"/>
        </div>

        <div>
          <label>Chip SRC: </label>
          <!-- URL de la imagen dentro del placeholder -->
          <input :placeholder="chipImg"/>
        </div>

        <div>
          <label>Número: </label>
          <input type="text" v-model="cardNumber"/>
        </div>

        <div>
          <label>Fecha de expiración: </label>
          <input type="text" v-model="expirationDate"/>
        </div>

        <div>
          <label>Propietario: </label>
          <input type="text" v-model="cardOwner"/>
        </div>

        <div>
          <label>Tipo de tarjeta SRC: </label>
          <!-- URL de la imagen dentro del placeholder -->
          <input :placeholder="visaImg"/>
        </div>
      </form>

      <div class="card">
        <h3>{{ cardTitle }}</h3>
        <!--  Binding unidireccional-->
        <img :src="chipImg" width="40" alt="Chip" />
        <div>
          <h2>{{ cardNumber }}</h2>
          <span>Fecha Exp: <b>{{ expirationDate }}</b></span>
        </div>
        <footer>
          <span>{{ cardOwner }}</span>
          <!-- Binding unidireccional -->
          <img :src="visaImg" width="60" alt="Visa" />
        </footer>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cardTitle: '',
                cardNumber: '',
                expirationDate: '',
                cardOwner: '',
                chipImg: '/chip.png',
                visaImg: '/visa.png'
            }
        }
    };
</script>

<style scoped>
    * {
        margin: 0;
      }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        font-size: 10px;
        font-family: sans-serif;
    }

    #app {
        width: 60vw;
        display: grid;
        grid-template-columns: auto auto;
        gap: 40px;
        margin: 0 auto;
    }

    form {
        width: 400px;
        padding: 18px;
        border-radius: 20px;
        border: ridge 1px;
        box-shadow: 1px 1px 1px 1px gray;
        font-weight: bold;
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
    }
    
    form div {
        display: grid;
        grid-template-columns: 170px 200px;
        align-items: center;
        gap: 5px;
    }

    form div label {
        text-align: right;
    }

    .card {
        width: 400px;
        height: 230px;
        background: #1c1a1e;
        color: white;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0px 0px 10px 2px black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: start;
    }

    h3 {
        font-size: 20px;
    }

    h2 {
        font-size: 30px;
        letter-spacing: 10px;
        margin-bottom: 15px;
        text-shadow: 0px 0px 1px gold;
        font-family: Times;
    }

    b {
        font-size: 16px;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
        font-style: italic;
    }
</style>