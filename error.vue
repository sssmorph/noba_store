<script setup lang="ts">
    
</script>

<template>
  <section class="error-page d-flex flex-row justify-space-between ga-16">
    <div class="error-box">
        <img src="/public/image/error-image.png" alt="">
        <span class="error-code"> 404</span>
    </div>
    <div class="error-information d-flex flex-column">
        <p class="error-message">Кажется, здесь одежды нет</p>
        <div class="arrow-container">
            <p class="arrow-text">Зато есть там</p>
            <img src="/public/image/error-arrow.svg" class="error-arrow">
        </div>



        <NuxtLink to="/" class="go-home-button d-flex flex-row justify-space-between align-center">Каталог
            <v-icon icon="mdi-text-box-outline"></v-icon>
        </NuxtLink>
        <p class="error-description">Возможно, страница была удалена или вовсе не существовала.</p>
    </div>
  </section>
  <AppFooter/>
</template>

<style scoped>
    .arrow-container{
        position: relative;
    }
    .error-arrow{
        position: absolute;
        left: 25%;
        top: 80%;
    }
    .go-home-button{
        background-color: rgba(221, 58, 26, 1);
        color: rgba(255, 252, 251, 1);
        font-family: Manrope;
        font-size: 22px;
        font-weight: 400;
        line-height: 35.2px;
        letter-spacing: -0.02em;
        text-align: left;
        padding: 8px 30px;
        max-width: 190px;
        margin-top: 45px;
    }
    img{
        max-width: 580px;
        max-height: 580px;
    }
    .error-box{
        position: relative;
    }
    .error-code{
        position: absolute;
        top: 51%;
        left: 58%;
        Transform: translate(-50%, -50%);

        font-family: Swis721CnBTRusbyme-Roman;
        font-weight: 700;
        font-size: 160px;
        line-height: 120%;
        letter-spacing: 100px;

        pointer-events: none;

    }
    p{
        color:rgba(23, 7, 7, 1);
    }
    .error-page{
        max-width: 1440px;
        margin:50px auto;
        max-width: 1440px;
        padding: 0 145px;
    }
    .error-information{
        z-index: 2;
    }
    .error-message{
        font-family: Manrope;
        font-size: 54px;
        font-weight: 500;
        line-height: 120%;
        text-align: left;
        word-wrap: break-word;
        margin-top: 120px;
    }
    .arrow-text{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 165%;
        letter-spacing: 0.02rem;
        text-align: left;
        margin-top: 33px;
    }
    .error-description{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 165%;
        letter-spacing: 0.02rem;
        text-align: left;
        color: rgba(166, 163, 163, 1);
        margin-top: 153px;

    }
</style>