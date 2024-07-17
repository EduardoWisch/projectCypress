<script>
 
</script>

<template>
    <div class="container__lightSquare">
        <div class="container__rockIcon">
            <img src="./icons/rock.png" alt="" class="rockIcon">
        </div>
        <div  class="container__text">
            <h2>A fortuna fica ao lado daquele que ousa.</h2>
            <p>Todo progresso ocorre fora da zona de conforto</p>
        </div>
        <div>
            <img src="./icons/lightSquares.png" alt="">
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
}

.container__rockIcon {
    width: 150px;
    height: 150px;
}

.rockIcon {
    padding-left: 20px;
}

.container__text {
    line-height: 38px;
}

.container__text h2 {
    font-size: 27px;
    font-weight: 700;
    color: black;
}

.container__text p {
    color: black;
}

</style>