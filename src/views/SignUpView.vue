<script>
    import LightSquare from '@/components/LightSquare.vue';
    import Formulario from '@/components/Formulario.vue';

    export default {
        data() {
            return {
                formTitle: 'Inscreva-se',
                accountText: 'Já tenho conta',
                routerText: '/',
                buttonText: 'Cadastrar',
                routerButton: '/',
            }
        },
        components: {
            Formulario,
            LightSquare,
        }
    }
</script>
<template>
    <div class="container">
        <Formulario :formTitle="formTitle" 
        :fields="[
    { label: 'Nome completo', id: 'name', placeholder: 'Eduardo Alex Banhara Wisch', type: 'text' },
    { label: 'Endereço de e-mail', id: 'email', placeholder: 'email@mail.com.br', type: 'email' },
    { label: 'Senha de acesso', id: 'password', placeholder: '********', type: 'password' }
        ]" 
    :accountText="accountText"
    :routerText="routerText"
    :buttonText="buttonText"
    :routerButton="routerButton"    
        />
        <LightSquare />   
    </div>
</template>

<style scoped>
    .container{
        display:grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        padding: 2rem;
        gap: 2rem;
    }
</style>