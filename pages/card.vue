<script>
  import { Navigation, FreeMode, Thumbs } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  export default {
    components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
      console.log(swiper)
    };
    const prev = ref(null);
    const next = ref(null);
    return {
      modules: [FreeMode, Navigation, Thumbs],
      thumbsSwiper,
      setThumbsSwiper,
      prev,
      next,
    };
  },
    data: () => ({
      items: [
        {
          title: 'Главная',
          disabled: false,
          href: '/',
        },
        {
          title: 'Каталог',
          disabled: false,
          href: 'catalog',
        },
        {
          title: 'Свитшот Freedom',
          disabled: true,
          href: 'card'
        }
      ],
      sizes:[
        {
          title: "XS"
        },
        {
          title: "S"
        },
        {
          title: "M"
        },
        {
          title: "L"
        },
        {
          title: "XL"
        }
      ],
      compositions:[
        {
          imagePath: "/image/clean_P.svg",
        },
        {
          imagePath: "/image/wash_30.svg",
        },
        {
          imagePath: "/image/iron_2.svg",
        },
        {
          imagePath: "/image/dont_dry.svg",
        },
      ],
    }),
  }
</script>

<template>
  <AppHeaderBig/>
  <section class="card-page-container">
    <div class="sub-header-container">
      <v-breadcrumbs :items="items"
      divider="|"
      color="rgba(166, 163, 163, 1)">
        <template v-slot:title="{ item }">
          {{ item.title }}
        </template>
      </v-breadcrumbs>
      <div class="sub-header__button-container">
        <NuxtLink to="/" class="other-collection__link">
          <span class="button-text__collection">Другие коллекции</span>
          <img src="/assets/image/shirt.svg">          
        </NuxtLink>
        <v-btn
        variant="flat"
        size="34"
        color="rgba(221, 58, 26, 1)"
        rounded="0"
        >
        <img src="/assets/image/cart-black.svg" style="pointer-events: none;">
        </v-btn>        
      </div>
    </div>
    <div class="card-container">
      <div class="card__photos">
        <swiper
        class="card-photo-slider"
        :spaceBetween="5"
        :navigation="true"
        :slidesPerView="2"
        :loop="true"
        :thumbs="{swiper: thumbsSwiper}"
        :modules="modules"
        >
        <swiper-slide class="card-photo-slider__item">
          <img src="/assets/image/card-slider-1.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__item">
          <img src="/assets/image/card-slider-2.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__item">
          <img src="/assets/image/card-slider-3.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__item">
          <img src="/assets/image/card-slider-1.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__item">
          <img src="/assets/image/card-slider-2.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__item">
          <img src="/assets/image/card-slider-3.jpg" />
        </swiper-slide>
      </swiper>
      <swiper
        :spaceBetween="5"
        :slidesPerView="4"
        :freeMode="true"
        :loop="true"
        :modules="modules"
        @swiper="setThumbsSwiper"
      >
        <swiper-slide class="card-photo-slider__thumb">
          <img src="/assets/image/card-slider-1.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__thumb">
          <img src="/assets/image/card-slider-2.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__thumb">
          <img src="/assets/image/card-slider-3.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__thumb">
          <img src="/assets/image/card-slider-1.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__thumb">
          <img src="/assets/image/card-slider-2.jpg" />
        </swiper-slide>
        <swiper-slide class="card-photo-slider__thumb">
          <img src="/assets/image/card-slider-3.jpg" />
        </swiper-slide>
      </swiper>
      </div>
      <div class="card__description">
        <h1 class="item-name">Свитшот Freedom</h1>
        <p class="item-article">Арт.: 3265845</p>
        <p class="item-description">Стильный и комфортный свитшот. Изготовлен из высококачественного материала, который обеспечивает мягкость и долговечность изделия. Эксклюзивный дизайн с символикой свободы. Подходит для повседневной носки, добавляя образу индивидуальности и выразительности.
        </p>
        <div class="item-information__container">
          <div class="item-information">
            <span class="information-title">Состав:</span>
            <span class="information-description">100% хлопок</span>
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
              v-for="(size, index) in sizes"
              :key="index"
              class="size-button">{{size.title}}</button>
            </div>
          </div>
          <div class="composition-container">
            <span class="composition-title">Гладить при 150°С</span>
            <div class="composition-icon-container">
              <img
              v-for="(composition, index) in compositions"
              :key="index"
              :src="composition.imagePath"
            />
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="card-bottom">
          <span class="item-price">4500 ₽</span>
          <v-btn
          class="to-basket__button"
          variant="flat"
          width="190"
          height="52"
          rounded="0"
          color="rgba(221, 58, 26, 1)"
          >
            <span class="to-basket">В корзину</span>
            <img src="/assets/image/cart-white.svg" alt="">
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
        ref="prev"
        variant="flat"
        color="rgba(23, 7, 7, 1)"
        size="34"
        rounded="0"
        >
          <img src="/assets/image/white-arrow.svg" alt="" class="prev-button" style="pointer-events:none;">
        </v-btn>
        <v-btn
        ref="next"
        variant="flat"
        color="rgba(23, 7, 7, 1)"
        size="34"
        rounded="0"
        >
          <img src="/assets/image/white-arrow.svg" alt="" style="pointer-events:none;">
        </v-btn>
      </div>
      <div class="recomendation-slider">

        <Swiper
        style="position: relative;"
        :loop="true"
        :slides-per-view="5"
        :spaceBetween="44"
        :navigation="{
          prevEl: prev,
          nextEl: next,
        }"
        >
        
          <swiper-slide v-for="n of 10" :virtualIndex="n" :key="n">
            <div class="slider__card-item">
              <img src="/assets/image/for-slider.jpg" class="card-item__photo">
              <div class="card-item__bottom">
                <span class="card-item__bottom-title">Свитшот Noba</span>
                <div class="card-item__bottom-price-container">
                  <span class="card-item__bottom-price">{{n}}4500 ₽</span>
                  <button class="card-item__bottom-cart"><img src="/assets/image/cart-red-13.svg" alt=""></button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </Swiper>
      </div>
    </div>

  </section>
  <AppFooter/>
</template>

<style lang="scss" scoped>
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
    flex-direction: row;
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
  .composition-container{
    display: flex;
    flex-direction: column;
    gap: 30px;
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
  .card-photo-slider__thumb{
    img{
      width: 210px;
      height: 280px;
      object-fit: cover;
    }
  }
</style>