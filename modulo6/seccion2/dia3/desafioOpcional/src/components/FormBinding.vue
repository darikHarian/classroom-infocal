<template>
    <div id="app">
        <form>
            <div id="formTitle" class="form-fields">
                <label for="title">Título: </label>
                <input type="text" id="title" v-model="article.formTitle" required />
            </div>
            <hr>
            <div id="selectEmoji" class="form-fields">
                <label for="emoji">Emoji:</label>
                <select id="emoji" v-model="formEmoji">
                    <option value="&#x1f468;&#x200d;&#x1f4bb;">&#x1f468;&#x200d;&#x1f4bb;</option>
                    <option value="&#x1f469;&#x200d;&#x1f4bb;">&#x1f469;&#x200d;&#x1f4bb;</option>
                    <option value="&#x1f468;&#x200d;&#x1f680;">&#x1f468;&#x200d;&#x1f680;</option>
                    <option value="&#x1f469;&#x200d;&#x1f680;">&#x1f469;&#x200d;&#x1f680;</option>
                    <option value="&#x1f9b8;&#x200d;&#x2642;&#xfe0f;">&#x1f9b8;&#x200d;&#x2642;&#xfe0f;</option>
                    <option value="&#x1f9b8;&#x200d;&#x2640;&#xfe0f;">&#x1f9b8;&#x200d;&#x2640;&#xfe0f;</option>
                    <option value="&#x1f9d9;&#x200d;&#x2642;&#xfe0f;">&#x1f9d9;&#x200d;&#x2642;&#xfe0f;</option>
                    <option value="&#x1f9d9;&#x200d;&#x2640;&#xfe0f;">&#x1f9d9;&#x200d;&#x2640;&#xfe0f;</option>
                </select>
            </div>
            <hr>
            <div id="apreciationSelect" class="form-fields">
                <label>Apreciación:</label>
                <ul>
                    <li>
                        <input type="radio" name="apreciations" value="Regular" v-model="apreciation" />
                        <span>Regular</span>
                    </li>
                    <li>
                        <input type="radio" name="apreciations" value="Bien" v-model="apreciation" />
                        <span>Bien</span>
                    </li>
                    <li>
                        <input type="radio" name="apreciations" value="Muy bien" v-model="apreciation" />
                        <span>Muy bien</span>
                    </li>
                    <li>
                        <input type="radio" name="apreciations" value="Increible" v-model="apreciation" />
                        <span>Increible</span>
                    </li>
                </ul>
            </div>
            <hr>
            <div id="learnedSkills" class="form-fields">
                <label>Competencias aprendidas:</label>
                <ul>
                    <li>
                        <input v-model="skills" name="skills" type="checkbox" value="Morfología de un componente" />
                        <span class="skills-text">Morfología de un componente</span>
                    </li>
                    <li>
                        <input v-model="skills" name="skills" type="checkbox" value="Directivas" />
                        <span class="skills-text">Directivas</span>
                    </li>
                    <li>
                        <input v-model="skills" name="skills" type="checkbox" value="One-Way y Two-Way data binding" />
                        <span class="skills-text">One-Way y Two-Way data binding</span>
                    </li>
                    <li>
                        <input v-model="skills" name="skills" type="checkbox" value="Estado" />
                        <span class="skills-text">Estado</span>
                    </li>
                    <li>
                        <input v-model="skills" name="skills" type="checkbox" value="El patrón de diseño MVVM" />
                        <span class="skills-text">El patrón de diseño MVVM</span>
                    </li>
                </ul>
            </div>
            <hr>
            <div id="opinion" class="form-fields">
                <label>Opinión:</label>
                <textarea v-model="article.opinion"></textarea>
            </div>
        </form>
        <section id="content">
            <span>{{ formEmoji }}</span>
            <h1>{{ article.formTitle }}</h1>
            <h3>Y me parece {{ apreciation }}</h3>
            <h4>He aprendido:</h4>
            <p>{{ skills }}</p>
            <h4>Mi opinión hasta ahora del framework es:</h4>
            <p>{{ article.opinion }}</p>
        </section>
    </div>
</template>

<script>
    export default {
        name:'App',
        data() {
            return {
                formEmoji: '',
                apreciation: '',
                skills: [],
                article: {
                    formTitle: '',
                    opinion: ''
                }
            }
        }
    };
</script>

<style scoped>
    #app {
        display: grid;
        grid-template-columns: 40% 60%;
    }

    form {
        width: 95%;
        margin: 0 auto;
        background: #000;
        border-radius: 20px;
        color: #fff;
    }
    
    #formTitle {
        padding-top: 30px;
    }

    form .form-fields {
        display: flex;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    form .form-fields label {
        margin-left: 40px;
        margin-right: 10px;
        font-weight: bold;
    }

    form .form-fields ul {
        list-style: none;
        display: flex;
        margin-top: 0;
        margin-bottom: 0;
    }

    form .form-fields ul li {
        padding-left: 20px;
    }

    #learnedSkills > ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 40px;
        row-gap: 10px;
    }

    #learnedSkills > ul li {
        text-align: left
    }

    #opinion {
        padding-bottom: 30px;
    }

    #opinion > textarea {
        width: 78%;
    }

    form hr {
        margin-left: 40px;
        margin-right: 40px;
    }

    #content {
        margin: 0 auto;
        width: 95%;
        border: 1px solid #000;
        border-radius: 20px;
    }

    #content > span {
        font-size: 46px;
    }
</style>