<script setup>
    import { useContacts } from '../composables/useContacts';

    const contacts = await useContacts();
    const socialMedia = contacts['migx.mainsocial'];

    const getImageSource = (social) => {
        switch (social.trim().toLowerCase()) {
            case 'youtube':
            return 'http://api.noba.store/img/icons/youtube-info.svg';
            case 'telegram':
            return 'http://api.noba.store/img/icons/telegram-info.svg';
            case 'tiktok':
            return 'http://api.noba.store/img/icons/tiktok-info.svg';
            default:
            return '';
        }
    };

    const burgerIsActive = ref(false);
    const toggleBurger = () =>{
        burgerIsActive.value = !burgerIsActive.value;
    };
</script>

<template>
    <header >
        <div class="wrapper">
            <div class="burger-menu-container" :class="{hidden: !burgerIsActive}">
                <div class="burger-menu-border">
                    <div class="burger-links">
                        <NuxtLink to="/portfolio" class="header-link swis t-w">Портфолио</NuxtLink>
                        <NuxtLink to="/" class="header-link swis t-w">Интернет-магазин</NuxtLink>
                        <NuxtLink to="/konkurs" class="header-link swis t-w">Конкурс</NuxtLink>
                    </div>
                    <div class="burger-links">
                        <span class="header-link swis t-w">{{ contacts.email }}</span>
                        <span class="header-link swis t-w">{{ contacts.phone }}</span>
                    </div>
                </div>
            </div>
            <nav class="header-navigation">
                <div class="header__social-media">
                        <a v-for="social in socialMedia" :key="social.MIGX_id" :href="social.url" class="social-media__item">
                            <img :src="getImageSource(social.social)" alt="" class="social-media__image">
                        </a>
                </div>
                <div class="burger-menu" @click="toggleBurger">
                    <span class="line1" :class="{open1: burgerIsActive}"></span>
                    <span class="line2" :class="{open2: burgerIsActive}"></span>
                  </div>
                <div class="header-contacts">
                    <span class="header-link swis t-w">{{ contacts.email }}</span>
                    <span class="header-link swis t-w">{{ contacts.phone }}</span>
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
        background-color: rgba(1, 1, 1, 1);
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
        width: 40px;
        height: 12px;
        border-radius: 18px;
        display: none;
        gap: 8px;
        z-index: 10;
        top: 34px;
        right: 44px;
        z-index: 15;
    }
    .burger-menu span {
        width: 40px;
        height: 2px;
        transition: 0.3s ease;
        transform-origin: center;
        background-color: rgba(255, 252, 251, 1);

    }
  
  .open1{
    transform: rotate(45deg) translateY(3px) translateX(4px);
    width: 21px !important;
  }
  
  .open2 {
    transform: rotate(-45deg) translateY(-3px) translateX(4px);
    width: 21px !important;
  }
  .konkurs-photo__mobile{
    display: none;
  }
  .hidden{
    width: 0 !important;
    transition: all ease-in-out 0.3s;
  }
  .burger-menu-container{
    transition: all ease-in-out 0.3s;
    z-index: 15;
    position:absolute;
    top:0;
    right: 0;
    width: 238px;
    height: 310px;
    background-color: rgba(23, 7, 7, 1);
  }

  .burger-menu-border{
    padding: 53px 20px 0 20px;
    width: 232px;
    height: 304px;
    z-index: 6;
    border-left: dashed 1px rgba(255, 252, 251, 1);
    border-bottom: dashed 1px rgba(255, 252, 251, 1);
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: 56px;
  }
  .burger-links{
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
    @media (max-width: 860px) {

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
    @media (max-width: 640px) {
        .burger-menu{
            top: 26px;
            right: 20px;
        }
        .wrapper{
            padding: 20px;
        }
        
        header{
            height: 65px;
        }
    }
</style>