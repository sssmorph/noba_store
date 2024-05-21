<script setup>
    let links = [
        {url: "portfolio",name: "Портфолио"},
        {url: "/", name: "Интернет-магазин"},
        {url: "konkurs", name: "Конкурс"},
        {url: "info", name: "О компании"},]
        const modalStore = useModal();

    const openModal = () =>{
        modalStore.openFeedback();
    }
</script>

<template>
    <footer>
        <div class="wrapper">
            <div class="logo-copy">
                <img src="/assets/image/logo-white.png" alt="" class="logo-img">
                <div class="copyright-container">
                    <img src="/assets/image/copyright.svg" alt="" class="copyright-img">
                    <span class="t-w manrope copyright">Все права защищены</span>
                </div>
            </div>
            <div class="footer-right-container">
                <div class="links-container">
                    <NuxtLink :to="link.url" class="t-w swis footer-link" v-for="link in links" :key="link">{{ link.name }}</NuxtLink>
                    <span @click="openModal" class="t-w swis footer-link cursor-pointer">Связаться с нами</span>
                </div>
                <div class="social-contacts">
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
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .swis{
        font-family: Swis721CnBTRusbyme-Roman;
    }
    .manrope{
        font-family: manrope;
    }
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
    .social-contacts{
        display: flex;
        gap: 65px;
    }

    @media (max-width: 1200px) {
        .wrapper{
            padding: 24px 20px;
            
        }
        .social-contacts{
            gap: 0;
            flex-direction: column;
            justify-content: space-between;
            align-items: end;
        }
        .contacts-container{
            margin-top: 0;
        }
        .footer-right-container{
            gap: 25px;
        }
        .links-container{
            gap: 12px 30px;
            width: 280px;
        }
    }
    @media (max-width: 860px) {
        .wrapper{
            position: relative;
        }
        footer{
            height: 358px;
        }
        .footer-right-container{
            position: absolute;
            max-width: 390px;
            height: 180px;
            top: 94px;  
            gap: 105px ;
            justify-content: space-between;
        }
        .social-contacts{
            gap: 92px;
        }
        .links-container{
            width: 125px;
            gap: 20px;
        }
        .social-media{
            margin-top: 0;
        }
        .logo-img{
            width: 234px;
            height: 22px;
        }
        .copyright{
            font-size: 12px;
        }
        .copyright-img{
            width: 16px;
            height: 16px;
        }
        .contacts-container{
            gap: 20px;
        }
    }
    @media (max-width: 429px) {
        .footer-right-container{
            gap: 50px;
        }
    }
</style>