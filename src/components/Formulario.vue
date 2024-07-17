<script setup>
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        formTitle: {
            type: String,
            default: '',
        },
        fields: {
            type: Array,
            default: () => [],
        },
        accountText: {
            type: String,
            default: '',
        },
        buttonText: {
            type: String,
            default: '',
        },
        routerText: {
            type: String,
            default: '',
        },
        routerButton: {
            type: String,
            default: '',
        },
    });
</script>




<template>
    <div class="container__main">
        <h1>{{ formTitle }}</h1>
        <form class="container__formulario">
            <div v-for="(field, index) in fields" :key="index" class="form-field">
                <label :for="field.id">{{ field.label }}</label>
                <input :type="field.type" :id="field.id" :name="field.id" :placeholder="field.placeholder">
            </div>
        </form>
        <div class="container__button">
            <div>
                <RouterLink class="routerLink" :to="routerText"><p>{{ accountText }}</p></RouterLink>
            </div>
                <RouterLink :to="routerButton"><button>{{ buttonText }}</button></RouterLink>
        </div>
    </div>
</template>

<style scoped>

    .container__main{
        color: #000E1F;
        padding: 0% 10% 5% 5%;
        margin: auto 0;
    }

    .container__main h1 {
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 7%;
    }
    .container__formulario label{
        display: inline-block;
        margin-bottom: 3%;
    }
    .container__formulario input{
        display: inline-block;
        width: 100%;
        height: 6vh;
        margin-bottom: 5%;
        font-size: 16px;
        color: #81858E;
        border: 1px solid #E5E5E5EE
    }
    .container__button{
        display: flex;
        justify-content: space-between;
        align-content: center
    }
    .container__button div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #81858E
    }
    .container__button div p {
        cursor: pointer;
    }
    .container__button button {
        font-size: 20px;
        padding: 15px 60px;
        border: none;
        background-color: black;
        color: white;
        cursor: pointer;
    }
    .routerLink {
        text-decoration: none;
        color: #81858E;
    }
</style>