<script setup>
    let links = [
        {url: "portfolio",name: "Портфолио"},
        {url: "/", name: "Интернет-магазин"},
        {url: "konkurs", name: "Конкурс"},
        {url: "info", name: "О компании"},
        {url: "#", name: "Связаться с нами"}]
</script>

<template>
    <footer>
        <div class="wrapper">
            <div class="logo-copy">
                <img src="/assets/image/logo-white.png" alt="">
                <div class="copyright-container">
                    <img src="/assets/image/copyright.svg" alt="">
                    <span class="t-w manrope copyright">Все права защищены</span>
                </div>
            </div>
            <div class="footer-right-container">
                <div class="links-container">
                    <NuxtLink :to="link.url" class="t-w swis footer-link" v-for="link in links" :key="link">{{ link.name }}</NuxtLink>

                </div>
                <div class="social-media">
                    <a href="" class="social-media__item">
                        <img src="/assets/image/tiktok-info.svg" alt="" class="social-media__image">
                    </a>
                    <a href="" class="social-media__item">
                        <img src="/assets/image/telegram-info.svg" alt="" class="social-media__image">
                    </a>
                    <a href="" class="social-media__item">
                        <img src="/assets/image/youtube-info.svg" alt="" class="social-media__image">
                    </a>
                </div>
                <div class="contacts-container">
                    <span class="swis t-w contact text-right">8 (925) 892-75-75</span>
                    <span class="swis t-w contact text-right">mvmax1000@yandex.ru</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        background-color: rgba(23, 7, 7, 1);
        height: 140px;
    }
    .wrapper{
        max-width: 1440px;
        padding: 29px 44px 22px 69px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .logo-copy{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .copyright-container{
        display: flex;
        align-items: center;
        gap:10px;
    }
    .copyright{

    }
    .t-w{
        color: rgba(255, 252, 251, 1);
    }
    .manrope{
        font-family: Manrope;
    }
    .contacts-container{
        display: flex;
        flex-direction: column;
        gap:10px;
        margin-top: 12px;
    }
    .contact{
        font-size: 16px;
        font-weight: 400;
        line-height: 120%;
    }
    .social-media{
        display: flex;
        align-items: center;
        gap: 15px;
        max-height: 25px;
        max-width: 105px;
        margin-top: 2px;
    }
    .links-container{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 12px 86px;
        width: 335px;
    }
    .footer-link{
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;

    }
    .footer-right-container{
        display: flex;
        gap: 65px;
    }
</style>