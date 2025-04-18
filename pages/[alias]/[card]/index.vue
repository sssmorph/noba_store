<script setup>
  import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
  import 'swiper/css/navigation';
  import { ref, onBeforeMount } from 'vue';
  import 'swiper/css/free-mode';
  import 'swiper/css/thumbs';
  import { useModal } from '../../../stores/modal';
  import { shopCart } from '../../../stores/cart';
  import { useRoute } from 'vue-router'
  import { getBloger } from '../../composables/getBlogerById';
  import { useBloggers } from '../../composables/useBloggers';
  import { getProduct } from '~/composables/getProduct';

  const route = useRoute()

  const blogers = await useBloggers();
  const blogerId = blogers.find(bloger => bloger.alias === route.params.alias)?.id;
  const bloger = await getBloger(blogerId);
  const normalizedBloger = Array.isArray(bloger.products) ? bloger.products : Object.values(bloger.products);

  const productId = normalizedBloger.find(product => product.alias  === route.params.card)?.id
  const curProduct = await getProduct(productId);


  const recomendation = ref(curProduct.recommendations);
  const gallery = curProduct.gallery;
  
  const thumbsSwiper = ref(null);
  const recomendationPrev = ref(null);
  const recomendationNext = ref(null);
  const cardPrev = ref(null);
  const cardNext = ref(null);
  const modules = ref([FreeMode, Navigation, Thumbs]);

  const cartStore = useModal();
  const cart = shopCart();
  const openCart = () => {
    cartStore.openCartModal();
  };
  const openError = () => {
    cartStore.openErrorModal();
  }

  const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
  };

  const items = ref([
    {
      title: 'Главная',
      disabled: false,
      href: '/',
    },
    {
      title: bloger.name,
      disabled: false,
      href: `http://noba.store/${route.params.alias}`,
    },
    {
      title: curProduct.pagetitle,
      disabled: true,
      href: 'card',
    },
  ]);

  const itemsMobile = ref([
    {
      title: `< ${bloger.name}`,
      disabled: false,
      href: 'catalog',
    },
  ]);

  const compositions = ref([
    {
      imagePath: '/image/clean_P.svg',
    },
    {
      imagePath: '/image/wash_30.svg',
    },
    {
      imagePath: '/image/iron_2.svg',
    },
    {
      imagePath: '/image/dont_dry.svg',
    },
  ]);

  const toCart = () => {
    let curentProduct = {
      id: curProduct.id,
      title: curProduct.pagetitle,
      image: curProduct.image,
      sizes: curProduct.size,
      size: curProduct.selectedSize,
      price: curProduct.price,
      count: 1,
    }
    if(!curentProduct.size){
      openError();
    }
    else{
      cart.addToCart(curentProduct);
    }

  };
  const recomendationToCart = (product) => {
    let curentProduct = {
      id: product.id,
      title: product.pagetitle,
      image: product.image,
      sizes: product.size,
      size: product.curSize,
      price: product.price,
      count: 1,
    };
    if(!curentProduct.size){
      openError();
    }else{
      cart.addToCart(curentProduct)
    }
    
  }
  const isFixed = ref(false);

  const createObserver = () => {
    const preorderButton = document.querySelector('#preorderButton');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isFixed.value = !entry.isIntersecting;
      });
    });

    observer.observe(preorderButton);
  };
  onMounted(async () => {
    createObserver();
  })
  useHead({
    title: curProduct.longtitle,
    meta: [
      { name: 'description', content: curProduct.description }
    ],
    htmlAttrs: {
            lang: 'ru'
        },
  })
</script>

<template lang="html">
  <PlacedOrderModal/>
  <ErrorModal/>
  <AppOrder/>
  <AppHeaderBig :bloger="bloger"/>
  <InfoFeedBackModal/>
  <CartModal/>
  <section class="card-page-container">
    <div class="sticky-basket" :class="{ visibly: isFixed, hidden: (cartStore.cartIsOpen || cartStore.appOrder || cartStore.placedOrder) }">
      <v-btn
      class="button-preorder"
      variant="flat"
      width="233"
      height="34"
      rounded="0"
      border="1.5px"
      color="rgba(221, 58, 26, 1)"
      @click="openCart"
      >
        <span class="button-text__preorder">Корзина{{ cart.productInCart.length != 0 ? ` (${cart.productInCart.length})`: '' }}</span>
        <img src="/assets/image/cart-white.svg" alt="cart"/>
      </v-btn>  
    </div>
    <div class="sub-header-container">
      <v-breadcrumbs :items="items"
      divider="|"
      color="rgba(166, 163, 163, 1)"
      class="breadcrumbs"
      >
        <template v-slot:title="{ item }">
          {{ item.title }}
        </template>
      </v-breadcrumbs>
      <v-breadcrumbs :items="itemsMobile"
      divider="|"
      color="rgba(166, 163, 163, 1)"
      class="breadcrumbs__mobile"
      >
        <template v-slot:title="{ item }">
          {{ item.title }}
        </template>
      </v-breadcrumbs>
      <div class="sub-header__button-container">
        <NuxtLink to="/" class="other-collection__link">
          <span class="button-text__collection">Другие коллекции</span>
          <span class="button-text__collection button-text__collection-mobile">Ещё коллекции</span>
          <img src="/assets/image/shirt.png" alt="shirt"/>          
        </NuxtLink>
        <v-btn
        id="preorderButton"
        class="button-preorder"
        variant="flat"
        width="233"
        height="34"
        rounded="0"
        border="1.5px"
        color="rgba(221, 58, 26, 1)"
        @click="openCart"
        >
          <span class="button-text__preorder">Корзина{{ cart.productInCart.length != 0 ? ` (${cart.productInCart.length})`: '' }}</span>
          <img src="/assets/image/cart-white.svg" alt="cart"/>
        </v-btn>      
      </div>
    </div>
    <div class="card-container">
      <div class="card__photos">
        <h1 class="item-name item-name__mobile">{{ curProduct.pagetitle }}</h1>
        <p class="item-article item-article__mobile">Арт.:{{ curProduct.article }}</p>
      </div>
      <div class="card__photos" v-if="gallery.length != 0">

        <swiper 
        class="card-photo-slider"

        :navigation="{
          nextEl: '.cardNext',
          prevEl: '.cardPrev',
        }"
        :slidesPerView="2"
        :loop="true"
        :thumbs="{swiper: thumbsSwiper}"
        :modules="modules"
        
        :breakpoints="{
          '100':{
            slidesPerView:1,
            centeredSlides:true
          },

          '1200':{
            slidesPerView:2,
            spaceBetween: 5,
            centeredSlides:false
          },
        }"
        >
        <swiper-slide class="card-photo-slider__item" v-for="(image, index) in gallery" :key="index">
          <NuxtImg format="webp"  :src="'http://api.noba.store' + image.url" quality="60"/>

        </swiper-slide>

        <swiper-slide v-if="gallery.length === 1" class="card-photo-slider__item  bg-f1">
          <div class="h-100 w-100 d-flex justify-center align-center">
            <NuxtImg src="~/assets/image/Camera.svg" class="contain h-25 w-25"/>
          </div>
        </swiper-slide>

        <div class="card-navigation-container" >
            <v-btn
            ref="cardPrev"
            variant="flat"
            color="rgba(23, 7, 7, 1)"
            size="34"
            rounded="0"
            class="cardPrev"
    
            >
              <img  src="/assets/image/white-arrow.svg" alt="arrow" class="prev-button" style="pointer-events:none;"/>
            </v-btn>
            <v-btn
            ref="cardNext"
            variant="flat"
            color="rgba(23, 7, 7, 1)"
            size="34"
            rounded="0"
            class=" cardNext"
            >
              <img src="/assets/image/white-arrow.svg" alt="arrow" style="pointer-events:none;"/>
            </v-btn>
        </div>

      </swiper>
      <swiper
        
        class="thumbSlider"
        :spaceBetween="5"
        :slidesPerView="4"
        :freeMode="true"
        :loop="true"
        :modules="modules"
        @swiper="setThumbsSwiper"
        
      >
        <swiper-slide class="card-photo-slider__thumb" v-for="(image, index) in gallery" :key="index">
          <NuxtImg quality="50" loading="lazy" format="webp" :src="'http://api.noba.store' + image.url" />
        </swiper-slide>
      </swiper>

      </div>
      <div class="" v-else>
        <img src="~/assets/image/no_photo.svg" class="no-photo"/>
        <img src="~/assets/image/no_photo_mobile.svg" class="no-photo__mobile"/>
      </div>
      <div class="card__description">
        <h1 class="item-name">{{ curProduct.pagetitle }}</h1>
        <p class="item-article"> Арт.:{{ curProduct.article }}</p>
        <div v-html="curProduct.content" class="item-description"> </div>
        <div class="item-information__container">
          <div class="item-information">
            <span class="information-title">Состав:</span>
            <span class="information-description">{{ curProduct.compound}}</span>
          </div>
          <div class="item-information">
            <span class="information-title">Производство:</span>
            <span class="information-description">Россия</span>
          </div>
        </div>
        <div class="size-conditions">
          <div class="size-container">
            <span class="size-title">Выбрать размер</span>
            <div class="size-container__buttons">
              <button 
              v-for="(size, index) in curProduct.size"
              :key="index"
              class="size-button"
              :class="{selectedButton: size == curProduct.selectedSize}"
              @click="curProduct.selectedSize = size"
              >{{size}}</button>
            </div>
          </div>
          <div class="composition-container d-flex justify-end">
            <div class="composition-icon-container">
              <img
              alt="Operating conditions"
              v-for="(composition, index) in compositions"
              :key="index"
              :src="composition.imagePath"
            />
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="card-bottom">
          <span class="item-price">{{ curProduct.price }} ₽</span>
          <v-btn
          class="to-basket__button"
          variant="flat"
          width="190"
          height="52"
          rounded="0"
          color="rgba(221, 58, 26, 1)"
          @click="toCart()"
          >
            <span class="to-basket">В корзину</span>
            <img  src="/assets/image/cart-white.svg" alt="cart"/>
          </v-btn>  
        </div>
      </div>
    </div>

    <div class="recomendation-container">
      <div class="recomendation-header">
        <h1 class="recomendation-title">Вам может понравится</h1>
      </div>
      <div class="recomendation-slider__buttons-container">
        <v-btn
        ref="recomendationPrev"
        variant="flat"
        color="rgba(23, 7, 7, 1)"
        size="34"
        rounded="0"
        class="recomendationPrev"
        >
          <img src="/assets/image/white-arrow.svg" alt="prev" class="prev-button" style="pointer-events:none;">
        </v-btn>
        <v-btn
        ref="recomendationNext"
        variant="flat"
        color="rgba(23, 7, 7, 1)"
        size="34"
        rounded="0"
        class="recomendationNext"
        >
          <img  src="/assets/image/white-arrow.svg" alt="next" style="pointer-events:none;"/>
        </v-btn>
      </div>

        <Swiper
        style="position: relative;"
        class="recomendation-slider"
        :loop="true"
        :slides-per-view="5"
        :spaceBetween="44"
        :modules="modules"
        :navigation="{
          nextEl: '.recomendationNext',
          prevEl: '.recomendationPrev',
        }"
        :breakpoints="{
          '100':{
            slidesPerView:1,
            centeredSlides:true,
            freeMode:true,
          },
          '600':{
            slidesPerView:2,
            spaceBetween: 28,
          },
          '850':{
            slidesPerView: 3,
            spaceBetween: 44,
          },
          '1100': {
            slidesPerView: 4,
          },
          '1440': {
            slidesPerView: 5,
          },
        }"
        >
          <swiper-slide v-for="(product, index) in recomendation" :key="index"
          class="card-item"
          >
            <NuxtLink :to="{name: 'alias-card', params: {alias: bloger.alias, card: product.alias } }"  aria-label="recomendation product"> 
              <NuxtImg format="webp" loading="lazy" quality="60" v-if="product.image" :src="`http://api.noba.store${product.image}`" class="card-photo"/>
              <div v-else class="card-photo d-flex justify-center align-center bg-f1">
                <img src="~/assets/image/Camera.svg" class="contain h-25 w-25" alt="camera"/>
              </div>
            </NuxtLink>
            <NuxtLink class="card-item-bottom" :to="{name: 'alias-card', params: {alias: bloger.alias, card: product.alias } }" aria-label="recomendation product">
              <div class="card-item-bottom__header">
                <span class="item-name__rec">{{ product.pagetitle }}</span>
                <span class="item-price__rec">{{ product.price }}₽</span>
              </div>
  
            </NuxtLink>
            <div class="size-container__rec">
              <button
              v-for="currentSize in product.size" :key="currentSize" :value="currentSize"
              class="size-button__rec" :class="{cardSizeButton: currentSize == product.curSize}"
              @click="product.curSize = currentSize"
              aria-label="size button"
              >{{currentSize}}</button>
            </div>
            <div class="to-basket-container">
              <v-btn
                class="to-basket__button__rec"
                variant="outlined"
                height="28"
                width="128"
                rounded="0"
                color="rgba(221, 58, 26, 1)"
                @click="recomendationToCart(product)"
              >
                <span class="to-basket__rec">В корзину</span>
                <div class="to-basket__image__rec"></div>
              </v-btn>
            </div>
          </swiper-slide>

        </Swiper>
    </div>

  </section>
  <AppFooter/>
</template>

<style lang="scss" scoped>
  *{
    transition: 0.2s all ease-in-out;
  }

  .bg-f1{ 
    background-color: #f1f1f1;
  }

  .no-photo__mobile{
    display: none;
  }
  .card-page-container{
    max-width: 1440px;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 100px;
  }
  .sub-header-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 40px;
  }
  .sub-header__button-container{
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }
  .other-collection__link{
    width: 233px;
    height: 34px;
    border: 1.5px solid rgba(221, 58, 26, 1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .button-text__collection{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    margin-right: 15px;
    text-transform: lowercase;
  }
  .button-text__collection:first-letter{
      text-transform: uppercase;
  }
  .card-container{
    margin-top: 55px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 43px;
    padding: 0 40px;
    margin-bottom: 83px;
  }
  .item-name{
    font-family: Manrope;
    font-size: 54px;
    font-weight: 500;
    line-height: 64.8px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    max-width: 430px;
  }
  .item-article{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color:rgba(166, 163, 163, 1);
    margin-top: 27px;
  }
  .item-description{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    max-width: 430px;
    margin-top: 28px;

  }
  p{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    max-width: 430px;
    margin-top: 28px;

  }
  .item-information__container{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 42px;
  }
  .item-information{
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    gap: 15px;
  }
  .information-title{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    text-align: left;
    color: rgba(23, 7, 7, 1);
  }
  .information-description{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);

  }
  .size-conditions{
    margin-top: 74px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .size-container{
    display: flex;
    flex-direction: column;
    gap: 24px;

  }
  .size-title{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    text-align: left;
    color: rgba(23, 7, 7, 1);

  }
  .size-container__buttons{
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: flex-start;
  }

  .composition-container{
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 10px;
  }
  .composition-title{
    font-family: Manrope;
    font-size: 12px;
    font-weight: 300;
    line-height: 14.4px;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    margin-left: 3px;
  }
  .composition-icon-container{
    display: flex;
    flex-direction: row;
    gap:7px;
  }
  .divider{
    border-top: 1.5px solid rgba(221, 58, 26, 1);
    margin-top: 39px;
    margin-bottom: 20px;
  }
  .card-bottom{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 28px;
  }
  .item-price{
    font-family: Manrope;
    font-size: 54px;
    font-weight: 300;
    line-height: 86.4px;
    text-align: right;
    color: rgba(23, 7,7,1);

  }
  .item-price__rec{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    letter-spacing: -0.02em;
    text-align: right;
    color: rgba(23, 7, 7, 1);
  }
  .to-basket__button{

    .to-basket{
      margin-right: 18px;
      text-transform: lowercase;
      font-family: Manrope;
      font-size: 22px;
      font-weight: 400;
      line-height: 35.2px;
      letter-spacing: -0.02em;
      text-align: left;
      color: rgba(255, 252, 251, 1);
    }
    .to-basket::first-letter{
      text-transform: uppercase;
    }
  }
  .button-text__preorder{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    text-transform: lowercase;
    color: rgba(255, 252, 251, 1);
    margin-right: 15px;
  }
  .button-text__preorder:first-letter{
    text-transform: uppercase;
  }
  .recomendation-title{
    font-family: Manrope;
    font-size: 36px;
    font-weight: 500;
    line-height: 57.6px;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    margin-left: 118px;
  }
  .slider__card-item{
    width: 268px;
    height: 391px;
  }
  .card-item__photo{
    width: 100%;
    height: 352px;
    object-fit: cover;
  }
  .card-item__bottom{
    margin-top: 10px;
    margin-left: 9px;
    margin-right: 9px;
    padding-top: 5px;
    border-top: 1.5px solid rgba(221, 58, 26, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .card-item__bottom-title{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    text-align: left;
    color: rgba(23, 7, 7, 1);
  }
  .card-item__bottom-price-container{
    display: flex;
    flex-direction: row;
    gap: 9px;
    position: absolute;
    bottom: -2px;
    right: 9px;
  }
  .card-item__bottom-price{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);

  }
  .card-item__bottom-cart{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .recomendation-slider{
    margin-top: 40px;
  }
  .recomendation-slider__buttons-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 5px;
    margin-right: 118px;
    transform: translateY(-17px)
  }

  .prev-button{
    transform: rotate(180deg);
  }
  .card__photos{
    max-width: 853px;
    height: 900px;
  }
  .card-photo-slider{
    margin-bottom: 5px;
  }
  .card-photo-slider__item{
    img{
      width: 424px;
      height: 614px;
      object-fit: cover;
    }
  }
  .card-photo-slider__item{
    height: 613px;
  }
  .card-photo-slider__thumb{
    img{
      width: 210px;
      height: 280px;
      object-fit: cover;
    }
  }
  .item-name__mobile{
    display: none;
  }
  .item-article__mobile{
    display: none;
  }
  .button-text__collection-mobile{
    display: none;
  }
  .breadcrumbs__mobile{
    display: none;
  }
  .card-photo-slider{
    :global(.swiper-button-prev){
      width: 34px;
      height: 34px;
      background-image: url(/assets/image/arrow-prev.svg);
    }
    :global(.swiper-button-prev::after){
      width: 34px;
      height: 34px;
      content: none;
    }
    :global(.swiper-button-next){
      width: 34px;
      height: 34px;
      background-image: url(/assets/image/arrow-next.svg);
    }
    :global(.swiper-button-next::after){
      width: 34px;
      height: 34px;
      content: none;
    }
  }
  .card-photo-slider{
    :global(.swiper-button-prev){
      position: absolute;
      left: auto;
      top: auto;
      right: 0 !important;
      bottom: 39px !important;
      rotate: 90deg;
    }
    :global(.swiper-button-next){
      position: absolute;
      left: auto;
      top: auto;
      right: 0 !important;
      bottom: 0 !important;
      rotate: 90deg;
    }
  }
  .size-button{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    border: 1.5px solid rgba(23, 7, 7, 1);
    color: rgba(23, 7, 7, 1);
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .selectedButton{
    color: rgba(221, 58, 26, 1);
    border: 1.5px rgba(221, 58, 26, 1) solid !important;
  }
  .card-navigation-container{
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
  }
  .cardPrev{
    rotate: 90deg;
  }
  .cardNext{
    rotate: 90deg;
  }
  .recomendation-container{
    position: relative;
  }
  .in-cart{
    background-color: black !important;
  }
  .card-item{
    height: 582px;
    display: flex;
    flex-direction: column;
    gap: 16px; 
    position:relative;
  }
  .to-basket-container{
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0px;
    right: 10.5px;
  }
  .to-basket__rec:first-letter{
    text-transform: uppercase;
  }
  .to-basket__image__rec{
    width: 14px;
    height: 13px;
    background-image: url(/assets/image/to-basket-black.svg);
  }
  .to-basket__button__rec:hover{
    background-color: rgba(221, 58, 26, 1);
    .to-basket__rec{
      color: rgba(255, 252, 251, 1);
    }
    .to-basket__image__rec{
      background-image: url(/assets/image/to-basket-white.svg);
    }
  }
  @media (hover: hover) {
    .card-item:hover{
      top: 0;
      left: 0;
      .size-container__rec{
        display: flex;
        opacity: 1;
      }
    }
  }
  .card-photo{
    max-width: 100%;
    height: 475px;
    object-fit: cover;
    width: 100%;
  }
  .card-item-bottom{
    border-top: 1.5px solid rgba(221, 58, 26, 1);
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 335px;
    padding-top: 13px;
    padding-bottom: 12px;
  }
  .card-item-bottom__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .size-container__rec{
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    position: absolute;
    top: 420px;
    display: none;
    opacity: 0;
    left: 0;
    right: 0;
  }
  .size-button__rec{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(255, 252, 251, 1);
    background-color: rgba(23, 7, 7, 1);
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-name__rec{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    text-align: left;
    color:rgba(23, 7, 7, 1);
  }
  .to-basket__rec{
    font-family: Manrope;
    font-size: 12px;
    font-weight: 300;
    line-height: 14.4px;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    text-transform: lowercase;
    margin-right: 10px;
  }
  .cardSizeButton{
    background-color: rgba(221, 58, 26, 1);
  }
  .sticky-basket{
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-right: 40px;
    position: sticky;
    top: -50px;
    padding-right: 40px;
    visibility: hidden;
    opacity: 0;
    z-index: 100;
    transform: translateY(40px);
  }
  .visibly{
    visibility: visible;
    top: -25px;
    opacity: 1;
  }
  .fixed{
    position: sticky;
    top: 0;
    right: 50px;
    z-index: 100;
  }
  .hidden{
    display: none;
  }
  .contain{
    object-fit: contain !important;
  }
  @media (max-width: 1650px) {
    .card-item:hover{
      .size-container__rec{
        display: flex;
        opacity: 1;
        top: 430px
      }
    }
  }
  @media (max-width: 1440px) {
    .card__photos{
      max-width: 750px;
    }
  }
  @media (max-width: 1200px){
    .card-photo{
      width: 100%;
    }
    .card-navigation-container{
      flex-direction: row;
    }
    .cardPrev{
      rotate: 0deg;
    }
    .cardNext{
      rotate: 0deg;
    }
    .thumbSlider{
      display: none;
    }
    .card-photo-slider__item{
      max-width: 750px;
      width: 100% !important;
      img{
        height: 614px;
        width: 100%;
        max-width: 424px;
        margin: auto;
      }
    }
    .card-photo-slider__thumb{
      img{
        height: 200px;
      }
    }
    .card__photos{
      height: 720px;
      max-width: 600px;
    }
    .item-information__container{
      margin-top: 25px;
      gap: 12px;
    }
    .size-conditions{
      margin-top: 34px;
      flex-direction: column;
      gap: 36px;
    }
    .divider{
      margin-top: 24px;
      margin-bottom: 7px;
    }
    .size-container{
      gap: 18px;
    }
    .card-bottom{
      gap: 15px;
    }
    .card-container{
      margin-top: 36px;
    }
    .card__photos{
      height: 614px;
    }
    .card-photo-slider{
      :global(.swiper-button-prev){
        position: absolute;
        left: auto;
        top: auto;
        right: 39px !important;
        bottom: 0px !important;
        rotate: 0deg;
      }
      :global(.swiper-button-next){
        position: absolute;
        left: auto;
        top: auto;
        right: 0 !important;
        bottom: 0 !important;
        rotate: 0deg;
      }
    }
  }

  @media (max-width: 1024px) {

    .card-item:hover{
      scale: none;

    }
    .size-container__rec{
      display: flex;
      opacity: 1;
      top: 430px;
    }
    .card__photos{
      max-width: 400px;
    }
  }
  @media (max-width: 950px) {
    .card-container{
      flex-direction: column;
      gap: 32px;
    }
    .card__description{
      max-width: 100%;
      width: 100%;
      .item-description{
        width: 100%;
        max-width: 100%;
      }
      p{
        width: 100%;
        max-width: 100%;
      }
      .item-name{
        max-width: 100%;
        width: 100%;
      }
    }
    .card__photos{
      height: auto;
      max-width: 100%;
      width: 100%;
    }
    .item-name{
      display: none;
    }
    .item-article{
      display: none;
    }
    .item-name__mobile{
      display: block;
      max-width: 100%;
      width: 100%;
    }
    .item-article__mobile{
      display: block;
      margin-top: 14px;
      margin-bottom: 24px; 
    }
    .card-photo-slider__item{
      max-width: 100%;
      width: 100%;
      margin-right: 0 !important;
    }
    .item-description{
      margin-top: 0;
    }
    p{
      margin-top: 0;
    }
    .card-photo-slider{
      margin-bottom: 0 !important;
    }
  }
  @media (max-width: 840px) {
    .slider__card-item{
      max-width: 400px;
      width: 100%;
      height: 597px; 
    }
    .card-item__photo{
      max-width: 100%;
      width: 100%;
      height: 534px;
    }
    .card-item__bottom{
      margin-top: 18px;
      margin-left:0;
      margin-right:0;
      padding-top: 13px;
    }
  }
  @media (max-width: 640px) {
    .no-photo{
      display: none;
    }
    .no-photo__mobile{
      display: block;
    }
    .recomendation-container{
      padding: 0 15px;
    }
    .card-container{
      padding: 0 15px;
      margin-bottom: 54px;
    }
    .sub-header-container{
      padding: 0 15px;
    }
    .card-item{
      max-width: 400px;
      max-height: 597px;
      flex: 0 0 100%;
      width: 100%;
    }

    .card-photo{
      width: 100%;
      height: 534px;
    }
    .to-basket-container{
      bottom: 1px;
      right: 6px;
    }
    .to-basket__button__rec{
      margin: 0;
      max-width: 94px !important;
      padding: 0 3px;
    }
    .card-item-bottom{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-block: 9px;
      gap: 10px;
      max-width: 388px;
    }
    .card-item-bottom__header{
      display: flex;
      justify-content: space-between;
      width: calc(100% - 113px);
      height: 28px;
      align-items: center;
    }
    .sticky-basket{
      padding-right: 15px;
    }
  }
  @media (max-width: 600px) {
    .breadcrumbs{
      display: none;
    }
    .button-preorder{
      width: 184px !important;
    }
    .breadcrumbs__mobile{
      display: block;
    }
    .swiper-slide__item{
      max-height: 597px !important;
      height: 597px !important;
    }
    .swiper-slide{
      display: flex;
      justify-content: center;
    }
    .recomendation-slider__buttons-container{
      position: absolute;
      z-index: 10;
      top: 320px;
      margin-right: 0;
      justify-content: space-between;
      width: calc(100vw - 30px);
    }
    .recomendation-container{
      padding: 0 15px;
    }
    .recomendation-title{
      font-size: 24px;
      line-height: 160%;
      margin:0;
    }
    .recomendation-slider{
      margin-top: 25px;
      max-height: 1222px;
    }
    .card-page-container{
      padding-top: 15px;
    }
    .sub-header__basket-button{
      width: 38px !important;
      height: 38px !important;
    }
    .other-collection__link{
      width: 184px;
      height: 38px;
    }
    .button-text__collection{
      display: none;
      margin-right: 11px;
    }
    .button-text__collection-mobile{
      display: block;
    }


    .item-name__mobile{
      font-size: 36px;
      line-height: 120%;
    }
    .item-article__mobile{
      font-size: 14px;
      line-height: 120%;
    }
    .item-description{
      font-size: 14px;
      line-height: 120%;
    }
    p{
      font-size: 14px;
      line-height: 120%;
    }
    .information-title{
      font-size: 14px;
    }
    .information-description{
      font-size: 14px;
    }
    .item-information{
      gap: 8px;
    }
    .size-title{
      font-size: 14px;
    }
    .size-button{
      width: 49px;
      height: 49px;
      font-size: 18px;
    }
    .item-price{
      font-size: 38px;
      line-height:160%;
    }
    .to-basket__button{
      width: 157px !important;
      height: 38px !important;
    }
    .to-basket{
      font-size: 18px;
      margin-right: 16px;
      line-height: 160%;
    }
    .sub-header__button-container{
      gap: 5px;
    }
  }
  :global(.v-field__outline){
    border-bottom: 2px black solid !important;
   }
   :global(.v-breadcrumbs){ 
      padding: 4px 0 !important;
      font-family: Manrope !important;
      font-weight: 300 !important;
      font-size: 12px !important;
      line-height: 120% !important;
      height: 20px !important;
    }
    :global(.v-breadcrumbs-item){
      padding: 0 !important;
    }
    :global(.v-breadcrumbs-divider){
      color: rgba(166, 163, 163, 1) !important;
      padding: 0 4px !important;
    }
    :global(.v-breadcrumbs-item--disabled){
      .v-breadcrumbs-item--link{
        color: rgba(23, 7, 7, 1) !important;
        opacity: 1 !important;
      }
    }
</style>