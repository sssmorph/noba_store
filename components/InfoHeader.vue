<script setup>

</script>

<template>
    <header >
        <div class="wrapper">
            <nav class="header-navigation">
                <div class="header__social-media">
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
                <div class="burger-menu">
                    <span class="line1"></span>
                    <span class="line2"></span>
                </div>
                <div class="header-contacts">
                    <span class="header-link swis t-w">mvmax1000@yandex.ru</span>
                    <span class="header-link swis t-w">8 (925) 892-75-75</span>
                </div>
                <div class="header-links">
                    <NuxtLink to="/portfolio" class="header-link swis t-w">Портфолио</NuxtLink>
                    <NuxtLink to="/" class="header-link swis t-w">Интернет-магазин</NuxtLink>
                    <NuxtLink to="/konkurs" class="header-link swis t-w">Конкурс</NuxtLink>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    
    header{
        background-color: rgba(23, 7, 7, 1);
        height: 80px;
    }
    .wrapper{
        max-width: 1440px;
        height: 100%;
        padding: 30px 44px;    
    }
    .t-w{
        color: rgba(255, 252, 251, 1);
    }
    .swis{
        font-family: Swis721CnBTRusbyme-Roman;;
    }
    .header-navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header-contacts{
        display: flex;
        gap:40px;
    }
    .header-links{
        display: flex;
        gap: 25px;
    }
    .header-link{
        font-weight: 400;
        font-size: 16px; 
        line-height: 120%;
    }
    .header__social-media{
        display: none;
        gap:20px;
        align-items: center;
    }
    .burger-menu {
        position: absolute;
        top: 26px;
        right: 20px;
        width: 40px;
        height: 12px;
        border-radius: 18px;
        display: none;
        gap: 8px;
    }
    .burger-menu span {
        width: 40px;
        height: 2px;
        transition: 0.3s ease;
        transform-origin: center;
        background-color: rgba(255, 252, 251, 1);

    }
    .open .line1 {
        transform: rotate(45deg) translateY(3px) translateX(4px);
    }
  
    .open .line2 {
        transform: rotate(-45deg) translateY(-3px) translateX(4px);
    }
    @media (max-width: 860px) {
        .wrapper{
            padding: 20px;
        }
        header{
            height: 65px;
        }
        .header-contacts{
            display: none;
        }
        .header-links{
            display: none;
        }
        .burger-menu{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .header__social-media{
            display: flex;
        }
    }
</style>