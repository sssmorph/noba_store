<script setup>

    let isActive = ref(false);
    const toggleHeader = () => { return isActive.value  = !isActive.value};
    const cartStore = useModal();

    const openCart = () =>{
        cartStore.openCartModal()
    }
</script>

<template>
    <header :class="{headerBig: isActive, colored: isActive}">
        <div class="header-container" :class="{headerBig: isActive, colored: isActive}">
            <div class="bloger-main-information">
                <img src="/assets/image/bloger.png" alt="" class="bloger-photo" :class="{grayFilter: !isActive, bigphoto: isActive}">
                <div class="main-information-container" :class="{mainInfoContainerBig: isActive}">
                    <div class="main-information-top">
                        <img src="/assets/image/logo.png" class="bloger-avatar">
                        <div class="bloger-header">
                            <span class="bloger-nick-name">TravelMax</span>
                            <span class="subscribers">275K</span>
                        </div>
                    </div>
                    <div class="main-information-bottom__container">
                        <div class="main-information-bottom__social-media">
                            <NuxtLink to="https://www.youtube.com" target="blank" class="social-media-link">
                                <img src="/assets/image/tiktok.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="https://www.youtube.com" target="blank" class="social-media-link">
                                <img src="/assets/image/telega.svg" alt="">
                            </NuxtLink>
                            <NuxtLink to="https://www.youtube.com" target="blank" class="social-media-link">
                                <img src="/assets/image/youtube.svg" alt="">
                            </NuxtLink>
                        </div>
                        <v-btn  
                            :class="{hidden: !isActive}"
                            class="cart-button"
                            variant="flat"
                            size="73"
                            color="rgba(221, 58, 26, 1)"
                            rounded="0"
                            @click="openCart">
                                <img src="/assets/image/bi_cart.svg" alt="">
                        </v-btn>
                    </div>
                </div>

            </div>
            <div class="bloger-addictional-information" :class="{blogerAddInfo: isActive}">
                <div class="informtaion-container">
                    <h1 class="bloger-name">Максим Иванов</h1>
                    <p class="bloger-description">Путешествия, география, культура и приключения</p>
                </div>
                <p :class="{blogerText: isActive, hidden: !isActive}" >Максим — популярный блогер-путешественник, который объехал более 50 стран мира и делится своими впечатлениями и советами с подписчиками. В его блоге "TravelMax" вы найдете увлекательные истории о самых необычных и красивых уголках планеты, рекомендации по планированию путешествий и эксклюзивные фото- и видеоматериалы. Алексей увлеченно исследует разные культуры и традиции, делая свои путешествия не только приятными, но и образовательными для своей аудитории.</p>

                <div class="buttons-container">
                    <NuxtLink to="/">
                        <v-btn  class="header-button"
                        variant="flat"
                        size="73"
                        color="rgba(23, 7, 7, 1)"
                        rounded="0">
                            <img class="header-button__photo" src="/assets/image/burger-lines.svg" alt="">
                        </v-btn>
                    </NuxtLink>
                    <v-btn  class="header-button"
                    variant="flat"
                    size="73"
                    color="rgba(255, 252, 251, 1)"
                    rounded="0"
                    :class="{ active: isActive }" 
                    @click="toggleHeader">
                        <img class="header-button__photo" :class="{rotatedarrow: isActive,}" src="/assets/image/menu-arrow.svg" alt="">
                    </v-btn>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    *{
        transition: all 0.5s ease-in-out;
    }
    header{
        background-color: rgba(166, 163, 163, 1);
        height: 220px;
    }
    .headerBig{
        height: 560px;
    }
    .colored{
        background-color: rgba(221, 58, 26, 1) !important;
    }
    .header-container{
        max-width: 1440px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .bloger-main-information{
        flex: 0 0 62%;
        box-sizing: content-box;
        position: relative;
    }
    
    .bloger-addictional-information{
        height: 220px;
        flex: 0 0 38%;
        padding: 30px 40px 20px 32px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position:relative;
    }
    .blogerAddInfo{
        height: 560px;
    }
    .bloger-name{
        font-family: Swis721CnBTRusbyme-Roman;
        font-size: 36px;
        font-weight: 700;
        line-height: 57.6px;
        text-align: left;
        color: rgba(255, 252, 251, 1);
    }
    .bloger-description{
        color: rgba(23, 7, 7, 1);
        font-family: Swis721CnBTRusbyme-Roman;
        font-size: 22px;
        font-weight: 400;
        line-height: 35.2px;
        text-align: left;
        max-width: 315px;

    }
    .buttons-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .header-button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .header-button__photo{
        pointer-events: none;

    }
    .bloger-photo{
        height: 220px;
        object-fit: cover;
        width: 893px;
    }
    .bigphoto{
        height: 560px;
    }
    .grayFilter{
        filter: grayscale(100%);        
    }
    .bloger-nick-name{
        font-family: Swis721CnBTRusbyme-Roman;
        font-size: 54px;
        font-weight: 700;
        line-height: 86.4px;
        letter-spacing: -0.02em;
        text-align: left;
    }
    .subscribers{
        font-family: Swis721CnBTRusbyme-Roman;
        font-size: 36px;
        font-weight: 700;
        text-align: left;
        color:rgba(221, 58, 26, 1);
        transform: translate(0, -14px);
    }
    .bloger-header{
        display: flex;
        flex-direction: column;
        transform: translateY(-6px);
        max-height: 136px;
    }
    .main-information-container{
        width: calc(100%);
        height: 150px;
        padding: 30px 44px 20px 40px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position:absolute;
        top:0;
        left: 0;

    }
    .mainInfoContainerBig{
        height: 560px;

    }
    .main-information-top{
        display: flex;
        flex-direction: row;
        gap: 22px;
    }
    .bloger-avatar{
        width: 112px;
        height: 112px;
    }
    .main-information-bottom__container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .main-information-bottom__social-media{
        display: flex;
        flex-direction: row;
        align-items: end;
        gap:5px;
        justify-content: flex-start;
    }
    .social-media-link{
        width: 34px;
        height: 34px;
        background-color:rgba(255, 252, 251, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            pointer-events: none;
        }
    }
    .rotatedarrow{
        transform: rotateX(180deg);
    }
    .hidden{
        display: none;
    }
    .blogerText{
        width: calc(100% - 72px);
        position: absolute;
        left: 32px;
        top: 179px;

        padding: 4px 10px;

        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 25.6px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(255, 252, 251, 1);
        background-color: black;
    }
    @media (max-width: 1440px) {
        .blogerText{
            font-size: 15px;
            line-height: 160%;
        }
    }
    @media (max-width: 1350px) {
        .blogerText{
            line-height: 150%;
        }
    }
    @media (max-width: 1200px) {
        .bloger-main-information{
            flex: 0 0 50%;

        }        
        .bloger-addictional-information{
            flex: 0 0 50%;
        }
    }
    @media (max-width: 1024px) {
        .bloger-main-information{
            flex: none;
        }        
        .bloger-addictional-information{
            flex: none;
        }
        header{
            height: 440px;
        }
        .header-container{
            flex-direction: column;
        }
        .bloger-photo{
            width: 100%;
        }
        .bigphoto{
            height: 220px;
        }
        .mainInfoContainerBig{
            height: 170px;
        }
        .cart-button{
            display: none;
        }
        .blogerAddInfo{
            height: 483px;
        }
        .headerBig{
            height: 703px;
        }
    }
    @media (max-width: 650px) {
        header{
            height: 328px;
        }
        .headerBig{
            height: 671px;
        }
        .bigphoto{
            height: 188px;
        }
        .main-information-container{
            height: 158px;
            padding: 15px;
            width: calc(100% - 30px);
        }
        .bloger-addictional-information{
            padding: 15px;
            height: 140px;
        }
        .bloger-avatar{
            width: 103px;
            height: 103px;
        }
        .main-information-top{
            gap:12px;
        }
        .bloger-nick-name{
            font-size: 36px;
            line-height: 160%;
        }
        .subscribers{
            font-size: 36px;
            line-height: 160%;
        }
        .bloger-header{
            max-height: 103px;
        }
        .bloger-photo{
            height: 188px;
        }
        .social-media-link{
            width: 31px;
            height: 31px;
        }
        .bloger-name{
            font-size: 26px;
            line-height: 160%;
        }
        .bloger-description{
            font-size: 16px;
            line-height: 160%;
        }
        .header-button{
            width: 49px !important;
            height: 49px !important;
        }
        .header-button__photo{
            width: 30px;
            height: 25px;
        }
        .blogerAddInfo{
            height: 483px;
        }
        .blogerText{
            width: calc(100% - 30px);
            left: 15px;
            top: 147px;
            font-size: 14px;
            line-height: 160%;
        }
    }
    @media (max-width: 400px) {
        .blogerText{
            top: 120px;
        }
        .blogerAddInfo{
            height: 512px;
        }
        .headerBig{
            height: 700px;
        }
    }
</style>