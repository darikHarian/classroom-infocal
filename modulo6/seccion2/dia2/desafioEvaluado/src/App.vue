<template>
  <BindingFormulario/>
</template>

<script>
import BindingFormulario from './components/BindingFormulario.vue'

export default {
  name: 'App',
  components: {
    BindingFormulario
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
</style>
