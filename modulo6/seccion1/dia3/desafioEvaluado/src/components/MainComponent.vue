<template>
  <div class="carnet">
      <aside>
        <div>
          <span>CEDULA DE INDENTIDAD</span>
          <img width="40" src="../assets/chile_bandera.png" alt="" />
        </div>
        <img src="../assets/foto_elon.jpg" alt="" />
        <p>RUN {{ RUN }}</p>
      </aside>
      <main>
        <header>
          <p>REPUBLICA DE CHILE</p>
          <span>SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN</span>
        </header>
        <section>
          <article>
            <header>APELLIDOS</header>
            <span>{{ Apellidos }}</span>
          </article>
          <article>
            <header>NOMBRES</header>
            <span>{{ Nombres }}</span>
          </article>
          <div class="grid-2-colums">
            <article>
              <header>NACIONALIDAD</header>
              <span>{{ Nacionalidad }}</span>
            </article>
            <article>
              <header>SEXO</header>
              <span>{{ Sexo }}</span>
            </article>
          </div>
          <div class="grid-2-colums">
            <article>
              <header>FECHA DE NACIMIENTO</header>
              <span>{{ FechaNacimiento }}</span>
            </article>
            <article>
              <header>NÚMERO DOCUMENTO</header>
              <span>{{ NumeroDocumento }}</span>
            </article>
          </div>
          <div class="grid-2-colums">
            <article>
              <header>FECHA DE EMISIÓN</header>
              <span>{{ FechaEmision }}</span>
            </article>
            <article>
              <header>FECHA DE VENCIMIENTO</header>
              <span>{{ FechaVencimiento }}</span>
            </article>
          </div>
          <article>
            <header>FIRMA DEL TITULAR</header>
            <span>{{ Firma }}</span>
          </article>
        </section>
      </main>
    </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data() {
    return {
      RUN: '22.222.222-2',
      Apellidos: 'MUSK',
      Nombres: 'ELON REEVE',
      Nacionalidad: 'SUDAFRICANO',
      Sexo: 'M',
      FechaNacimiento: '28 JUN 1971',
      NumeroDocumento: '222.222.222',
      FechaEmision: '01 ENE 2025',
      FechaVencimiento: '01 ENE 2030',
      Firma: 'X Æ A-12'
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60vh;
        font-size: 10px;
        font-family: sans-serif;
      }

      .carnet {
        width: 400px;
        height: 240px;
        background: #c8deed;
        border-radius: 20px;
        display: grid;
        grid-template-columns: 30% 1fr;
        padding: 15px;
        box-shadow: 0px 0px 10px 2px black;
      }

      aside div {
        display: flex;
      }

      aside div img {
        margin-left: 20px;
      }

      aside div span {
        font-size: 12px;
      }

      aside > img {
        margin-top: 15px;
        width: 110%;
      }

      aside p {
        text-align: center;
        font-size: 12px;
        font-weight: bold;
      }

      main {
        padding: 0px 14px;
      }

      main article {
        margin: 4px 0px;
      }

      main article header {
        font-weight: bold;
        color: #0235a4;
        font-size: 8px;
      }

      main header p {
        font-size: 20px;
        margin: 0;
        font-weight: bold;
        color: #0235a4;
      }

      main header span {
        font-size: 8px;
        color: #399be1;
      }

      main section {
        margin-top: 10px;
      }

      main section article {
        text-align: start;
        margin-left: 16px;
      }

      main section article span {
        font-size: 13px;
        font-weight: 600;
      }

      main section .grid-2-colums {
        display: grid;
        grid-template-columns: 50% 50%;
      }
</style>
