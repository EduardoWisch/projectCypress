<script>
    
    export default {
        data() {
            return {
                isDark: false,
            }
        },
        methods: {
            changeColorDark(){
                this.isDark = true
            },
            changeColorLight(){
                this.isDark = false
            }
        },
    }
</script>

<template>
    <div @mouseover="changeColorDark()" @mouseout="changeColorLight" :class="{'container__darkSquare' : isDark}" class="container__lightSquare">
        <div class="container__rockIcon">
            <img src="./icons/rock.png" alt="" class="rockIcon">
        </div>
        <div  class="container__text">
            <h2>A fortuna fica ao lado daquele que ousa.</h2>
            <p>Todo progresso ocorre fora da zona de conforto</p>
        </div>
        <div>
            <img v-if="isDark" src="./icons/darkSquares.png" alt="" class="teste">
            <img v-else src="./icons/lightSquares.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.container__lightSquare {
    width: 45vw;
    height: 90vh;
    background-color: #F7F7F7;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.3s;
}

.container__darkSquare {
    background-color: black;
}

.container__rockIcon {
    width: 150px;
    height: 150px;
}

.rockIcon {
    padding-left: 20px;
    transition: 0.3s;
}

.container__darkSquare .rockIcon{
    padding-top: 30px;
    transition: 0.3s;
}

.container__text {
    line-height: 38px;
}

.container__text h2 {
    font-size: 27px;
    font-weight: 700;
    color: black;
    transition: 0.3s;
}

.container__darkSquare .container__text h2 {
    color: white;
    transition: 0.3s;
}

.container__text p {
    color: black;
    transition: 0.3s;
}

.container__darkSquare .container__text p {
    color: white;
    transition: 0.3s;
}
</style>