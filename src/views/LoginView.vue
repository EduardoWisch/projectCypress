<script>
    import LightDarkSquare from '@/components/LightDarkSquare.vue';
    import Formulario from '@/components/Formulario.vue';

    export default {
        data() {
            return {
                formTitle: 'Login',
                accountText: 'Não tenho conta',
                routerText: '/signup',
                buttonText: 'Acessar',
                routerButton: '/main'
            }
        },
        components: {
            Formulario,
            LightDarkSquare
        }
    }
</script>

<template>
    <div class="container">
        <LightDarkSquare />
        <Formulario :formTitle="formTitle" 
        :fields="[
            { label: 'Endereço de e-mail', id: 'email', placeholder: 'email@mail.com.br', type: 'email' },
            { label: 'Senha de acesso', id: 'password', placeholder: '********', type: 'password' }
            ]"
        :accountText="accountText"
        :routerText="routerText"
        :buttonText="buttonText"
        :routerButton="routerButton"    

/>
        
    </div>
</template>

<style scoped>
    .container{
        display:grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        padding: 2rem;
    }
</style>