<template>
    <div id="desafioComponent">
        <section>
            <form>
                <div id="backgroundField">
                    <label>Color de fondo</label>
                    <input type="text" v-model="backgroundField">
                </div>
                <div>
                    <label>Color de texto</label>
                    <input type="text" v-model="colorTexto">
                </div>
                <div id="checkField">
                    <label>Mostrar texto</label>
                    <input type="checkbox" class="width-auto" v-model="mostrarTexto">
                </div>
                <div>
                    <label>Borde</label>
                    <input type="range" min="10" max="100" v-model="radioBorde">
                </div>
                <div>
                    <label>Contenido textual</label>
                    <textarea v-model="contenidoTextual"></textarea>
                </div>
                <div>
                    <label>Tipografía</label>
                    <select v-model="tipoTipografia">
                        <option :value="tipografia" v-for="tipografia in tipografias" :key="tipografia">{{ tipografia }}</option>
                    </select>
                </div>
                <div>
                    <label>Opaco</label>
                    <input type="checkbox" class="width-auto" v-model="activar">
                </div>
                <div>
                    <p>Tamaño de letra</p>
                    <div id="textSize">
                        <div v-for="textSize in textSizes" :key="textSize">
                            <label>
                                <span v-if="textSize == 16">Pequeño</span>
                                <span v-else-if="textSize == 24">Mediano</span>
                                <span v-else>Grande</span>
                                <input type="radio" :value="textSize" v-model="selectedSize">
                            </label>    
                        </div>
                    </div>
                </div>
                
            </form>
        </section>
        <section id="content">
            <div id="textBox" :class="{opacidad:activar}" :style="{background: backgroundField, borderRadius: radioBorde + 'px'}">
                <p id="mainText" :style="{color: colorTexto, fontFamily: tipoTipografia, fontSize: selectedSize + 'px'}" v-show="mostrarTexto">{{ contenidoTextual }}</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                backgroundField:'#81c784',
                colorTexto: 'white',
                mostrarTexto: false,
                contenidoTextual: 'Este es un texto generado por Vue',
                radioBorde: '50',
                tipoTipografia: 'cursive',
                tipografias: ["fantasy", "cursive", "monospace"],
                activar: false,
                selectedSize: 16,
                textSizes: [16, 24, 32]
            }
        }
    }
</script>

<style>
    #desafioComponent {
        display: grid;
        grid-template-columns: auto auto;
        width: 100%;
    }

    form {
        background: #004d40;
        color: #fff;
        width: 70%;
        margin: 0 auto;
    }

    form div {
        margin: 20px;
    }

    form div label {
        float: left;
    }

    form div input, form div textarea, select {
        width: 100%;
    }

    #backgroundField {
        padding-top: 20px;
    }

    p {
        text-align: left;
    }

    .width-auto {
        width: auto;
    }

    #textSize {
        display: flex;
        padding-bottom: 20px;
    }

    #content {
        width: 100%;
        display: flex;
        align-items: center;
    }

    #textBox {
        width: 350px;
        height: 350px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #mainText {
        color: #000;
        text-align: center;
        padding: 0 20px;
    }

    .opacidad {
        opacity: 0.5;
    }

    #textSize {
        margin: 0 auto;
    }

    #textSize div {
        margin: 0 20px;
    }

    #textSize, #textSize div label  {
        display: inline-flex
    }
</style>