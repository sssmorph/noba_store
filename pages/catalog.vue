<script>
import CardModal from '~/components/CardModal.vue';

  export default {
    data: () => ({
      items: [
        {
          title: 'Главная',
          disabled: false,
          href: '/',
        },
        {
          title: 'Каталог',
          disabled: true,
          href: 'catalog',
        },
      ],
      sizes:[
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
      images:{
        defaultCartImage: "image/to-basket-black.svg",
        hoverCartImage: "image/to-basket-white.svg",
        currentImage:  "image/to-basket-black.svg"
      },
      filterIsActive: ref(false),
      categories: ["Худи","Свитшоты","Брюки","Костюмы", "Лонгсливы", "Юбки", "Футболки", "Рубашки", "Верхняя одежда"],
      genders:["Женщины", "Мужчины", "Унисекс"],
      filterSizes: ["XS", "S", "M", "L", "XL"],
      prices: [0,10000]
    }),
    methods: {
    changeImage() {
      this.images.currentImage = this.images.hoverCartImage;
    },
    restoreImage() {
      this.images.currentImage = this.images.defaultCartImage;
    },
    toggleFilter(){
      console.log(this.filterIsActive)
       return this.filterIsActive = !this.filterIsActive
    }
  }
  }
</script>

<template>
  <AppHeaderBig/>
  
  <section class="catalog-container">
    <div class="sub-header-container">
      <v-breadcrumbs :items="items"
      divider="|"
      color="rgba(166, 163, 163, 1)">
        <template v-slot:title="{ item }">
          {{ item.title }}
        </template>
      </v-breadcrumbs>
      <div class="timer-container timer-container__hidden">
        <span class="timer-title">До старта продаж осталось</span>
        <div class="timer d-flex flex-row ">
          <div class="timer__item">
            <div class="timer__box">35</div>
            <span class="timer__text">дней</span>
          </div>
          <div class="timer__item">
            <div class="timer__box">16</div>
            <span class="timer__text">часов</span>
          </div>
          <div class="timer__item">
            <div class="timer__box timer__box-minute">28</div>
            <span class="timer__text">минут</span>
          </div>
        </div>
      </div>
      <div class="buttons-container">
        <v-btn
        class="button-preorder"
        variant="flat"
        width="233"
        height="34"
        rounded="0"
        border="1.5px"
        color="rgba(221, 58, 26, 1)"
        >
          <span class="button-text__preorder">Предзаказ</span>
          <img src="/assets/image/cart-white.svg">
        </v-btn>
        
        <NuxtLink to="/" class="other-collection__link">
          <span class="button-text__collection">Другие коллекции</span>
          <span class="button-text__collection button-text__collection__mobile">Еще коллекции</span>
          <img src="/assets/image/shirt.png">          
        </NuxtLink>
        <v-btn
        variant="flat"
        size="34"
        rounded="0"
        color="rgba(221, 58, 26, 1)"
        class="hidden"
        >
          <img src="/assets/image/cart-black.svg" alt="">
        </v-btn>
      </div>
    </div>
    <div class="timer-container timer-container__mobile">
      <span class="timer-title">До старта продаж осталось</span>
      <div class="timer d-flex flex-row ">
        <div class="timer__item">
          <div class="timer__box">35</div>
          <span class="timer__text">дней</span>
        </div>
        <div class="timer__item">
          <div class="timer__box">16</div>
          <span class="timer__text">часов</span>
        </div>
        <div class="timer__item">
          <div class="timer__box timer__box-minute">28</div>
          <span class="timer__text">минут</span>
        </div>
      </div>
    </div>
    <h1 class="catalog-title">Одежда</h1>
    <div class="filter-container" 
    :class="{filterPadding: filterIsActive}"
    >
      <div class="d-flex flex-row align-center filter-button-container">
        <v-btn
        :class="{filterButtonActive: filterIsActive}"
        class="filterButton"
        variant="flat"
        size="34"
        color="rgba(23, 7, 7, 1)"
        rounded="0"
        @click="toggleFilter"
        >
          <img src="/assets/image/filter-button.svg" alt="">
        </v-btn>
        <span class="filter-title">Отфильтровать и упорядочить</span>
      </div>
      <v-responsive max-width="390" class="search-box-container"
      :class="{hidden: filterIsActive}"
      >
        <v-text-field class="search-box"
        clearable label="Поиск" 
        variant="underlined"
        append-inner-icon="mdi-magnify"
        base-color="rgba(23, 7, 7, 1)"
        color="rgba(23, 7, 7, 1)"
        >
        </v-text-field>
      </v-responsive>
      <v-btn class="search-mobile"
      variant="flat"
      color="rgba(166, 163, 163, 1)"
      size="38"
      rounded="0">
          <img src="/assets/image/search-btn-mobile.svg" alt="">
      </v-btn>
      <v-btn 
      :class="{hidden: !filterIsActive}"
      class="close-mobile"
      @click="toggleFilter"
      variant="flat"
      color="rgba(23, 7, 7, 1)"
      size="34"
      rounded="0"
      >
        <img src="/assets/image/white-arrow.svg" alt="" class="button-arrow-filter">
      </v-btn>
    </div>
    <div :class="{opennedFilter: filterIsActive, hidden: !filterIsActive}" class="filter-box__container">
      <!-- открытый фильтр -->
      <div class="filter-item filter-item__mobile">
        <span class="filter-item__title">Цена</span>
        <v-range-slider
        max-width="190"
        track-size="2"
        track-color="rgba(166, 163, 163, 1)"
        track-fill-color="rgba(221, 58, 26, 1)"
        thumb-color="rgba(221, 58, 26, 1)"
        rounded="0"
        thumb-size="12"
        strict="true"
        thumb-label="always"
        step="1"
        v-model="prices"
        min="0"
        max="10000"
        >
        </v-range-slider>
      </div>
      <div class="filter-box">
        <div class="filter-item">
          <span class="filter-item__title">Категория</span>
          <ul class="filter-item__list">
            <li 
            v-for="(category, index) in categories"
            :key="index"
            >
              <span class="filter-item__text">{{category}}</span>
            </li>
          </ul>
        </div>
        <div class="filter-item__container">
          <div class="filter-item">
            <span class="filter-item__title">Пол</span>
            <ul class="filter-item__list">
              <li
              v-for="(gender, index) in genders"
              :key="index"
              >
                <span>{{gender}}</span>
              </li>
            </ul>
          </div>
          <div class="filter-item">
            <span class="filter-item__title">Размер</span>
            <div class="filter-item__button-container">
              <v-btn
              variant="outlined"
              color="rgba(23, 7, 7, 1)"
              rounded="0"
              size="34"
              v-for="(size, index) in filterSizes"
              :key="index"
              class="filter-size-button"
              >
                <span class="filter-size-button__text">{{size}}</span>
              </v-btn>
            </div>
          </div>
        </div>
        <!-- слайдер + radio -->
        <div class="filter-item__container radio-slider">
          <div class="filter-item">
            <span class="filter-item__title">Цена</span>
            <v-range-slider
            max-width="190"
            track-size="2"
            track-color="rgba(166, 163, 163, 1)"
            track-fill-color="rgba(221, 58, 26, 1)"
            thumb-color="rgba(221, 58, 26, 1)"
            rounded="0"
            thumb-size="12"
            strict="true"
            thumb-label="always"
            step="1"
            v-model="prices"
            min="0"
            max="10000"
            >
            </v-range-slider>
          </div>
          <div class="filter-item">
            <span class="filter-item__title">Упорядочить по</span>
            <div class="radio-button-container d-flex flex-column ga-2">

              <div class="">
                <input id="radio1" type="radio" name="radio" class="hidden" checked />
                <label for="radio1" class="cursor-pointer d-flex flex-row align-center filter-item__text">
                <div class="radio-button__square"></div>
                Цена по возрастанию</label>
              </div>
    
              <div class="">
                <input id="radio2" type="radio" name="radio" class="hidden" />
                <label for="radio2" class="cursor-pointer d-flex flex-row align-center filter-item__text">
                <div class="radio-button__square "></div>
                Цена по убыванию</label>
              </div>
            </div>
          </div>
        </div>

        <v-responsive max-width="390" class="search-box-container filter-search"
        style="margin-top:12px;"
        >
          <v-text-field class="search-box"
          clearable label="Поиск" 
          variant="underlined"
          append-inner-icon="mdi-magnify"
          base-color="rgba(23, 7, 7, 1)"
          color="rgba(23, 7, 7, 1)"
          >
          </v-text-field>
        </v-responsive>
      </div>
      <div class="filter-item radio-container__mobile">
        <span class="filter-item__title">Упорядочить по</span>
        <div class="radio-button-container d-flex flex-column ga-2">

          <div class="">
            <input id="radio1" type="radio" name="radio" class="hidden" checked />
            <label for="radio1" class="cursor-pointer d-flex flex-row align-center filter-item__text">
            <div class="radio-button__square"></div>
            Цена по возрастанию</label>
          </div>

          <div class="">
            <input id="radio2" type="radio" name="radio" class="hidden" />
            <label for="radio2" class="cursor-pointer d-flex flex-row align-center filter-item__text">
            <div class="radio-button__square "></div>
            Цена по убыванию</label>
          </div>
        </div>
      </div>
      <v-btn
      variant="outlined"
      width="157"
      height="38"
      rounded="0"
      color="rgba(221, 58, 26, 1)"
      class="show-button-container"
      >
        <span class="show-button-text">Показать</span>
        <img src="/assets/image/filter-show-arrow.svg" alt=""/>
      </v-btn>
      <!--  -->
    </div>
      <div class="catalog-cards-container " >
        <div class="dark-background" :class="{hidden: !filterIsActive}"></div>


        <div  class="card-item" v-for="n of 10" :virtualIndex="n" :key="n">
          <NuxtLink to="/card">
            <img src="/assets/image/card-image.png" class="card-photo">            
          </NuxtLink>
          <NuxtLink to="/card" class="card-item-bottom">
            <div class="card-item-bottom__header">
              <span class="item-name">Свитшот Freedom</span>
              <span class="item-price">4500 ₽</span>      
            </div>
            <div class="to-basket-container">
              <v-btn
              @mouseover="changeImage" @mouseleave="restoreImage"
              class="to-basket__button"
              variant="outlined"
              width="112"
              height="28"
              rounded="0"
              color="rgba(221, 58, 26, 1)"
              >
                <span class="to-basket">В корзину</span>
                <img :src="images.currentImage">
              </v-btn>            
            </div>
          </NuxtLink>
          <div class="size-container">
            <button
            v-for="(size, index) in sizes"
            :key="index"
            class="size-button">{{size.title}}</button>
          </div>
        </div>

      </div>
  </section>
  <AppFooter/>
</template>




<style lang="scss" scoped>
 *{
  transition: 0.5s all ease-in-out;
 }

  .catalog-container{
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
  :global(.v-breadcrumbs){ 
    padding: 4px 0 !important;
    font-family: Manrope;
    font-weight: 300;
    font-size: 12px;
    line-height: 120%;
    height: 20px;
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
  .timer-container{
    display: flex;
    flex-direction: row;
    gap:40px;
  }
  .timer-title{
    font-family: Swis721CnBTRusbyme-Roman;
    font-weight: 400;
    font-size: 28px;
    line-height: 120%;
    color: rgba(23, 7, 7, 1);
  }
  .timer__text{
    color: rgba(23, 7, 7, 1);
    font-family: Manrope;
    font-size: 12px;
    font-weight: 300;
    line-height: 14.4px;
    text-align: center;

  }
  .timer{
    display: flex;
    flex-direction: row;
    gap:5px;
  }
  .timer__item{
    display: flex;
    flex-direction: column;
    gap: 5px;

  }
  .timer__box{
    width: 34px;
    height: 34px;
    color: rgba(23, 7, 7, 1);
    border: 1.5px solid rgba(221, 58, 26, 1);
    font-family: Swis721CnBTRusbyme-Roman;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .timer__box-minute{
    background-color: rgba(221, 58, 26, 1);
    color: rgba(255, 252, 251, 1);
  }
  .buttons-container{
    display: flex;
    flex-direction: column;
    gap:12px;
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
  .cart-button{
    width: 19px;
  }
  .catalog-title{
    font-family: Manrope;
    font-size: 54px;
    font-weight: 500;
    line-height: 64.8px;
    letter-spacing: -0.02em;
    text-align: left;
    color:rgba(23, 7, 7, 1);
    margin-left: 118px;
    transform: translateY(-41px);
    width: 200px;
  }
  .filter-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 45px;
    padding-right: 118px;
    padding-left: 74px;
  }
  .filter-title{
    font-family: Manrope;
    font-size: 22px;
    font-weight: 400;
    line-height: 35.2px;
    letter-spacing: -0.02em;
    text-align: left;
    margin-left: 16px;
  }
  .catalog-cards-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 25px 5px;
    position: relative;
  }
  .card-item{
    max-width: calc(25% - 4px);
    height: 582px;
    display: flex;
    flex-direction: column;
    gap: 16px; 
    position:relative;
    flex: 0 0 25%;
  }
  @media (hover: hover) {
    .card-item:hover{
      height: 609px;
      .card-photo{
        height: 502px;
      }
      .size-container{
        display: flex;
        opacity: 1;
      }
    }
  }
  .card-photo{
    max-width: 100%;
    height: 475px;
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
  .item-name{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    text-align: left;
    color:rgba(23, 7, 7, 1);
  }
  .item-price{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    letter-spacing: -0.02em;
    text-align: right;
    color: rgba(23, 7, 7, 1);
  }
  .to-basket-container{
    display: flex;
    justify-content: flex-end;
  }
  .to-basket__button{
    margin-top:18px;
  }
  .to-basket__button:hover{
    background-color: rgba(221, 58, 26, 1);
    .to-basket{
      color: rgba(255, 252, 251, 1);
    }
  }
  .to-basket{
    font-family: Manrope;
    font-size: 12px;
    font-weight: 300;
    line-height: 14.4px;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    text-transform: lowercase;
    margin-right: 10px;
  }
  .to-basket:first-letter{
    text-transform: uppercase;
  }
  .size-container{
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    position: absolute;
    top: 454px;
    left: 138px;
    display: none;
    opacity: 0;
  }
  .size-button{
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
  .filterButtonActive{
    background-color: rgba(221, 58, 26, 1) !important;
  }

  .opennedFilter{
    height: 415px;
    padding: 0 118px 90px 79px;
    display: block;
  }
  .search-box-container{
    max-height: 52px;
  }
  .filter-button-container{
    max-height: 35px;
  }
  .button-arrow-filter{
    transform: rotate(270deg);
  }
  .hidden{
    display: none !important;
  }
  .hiddenSearch{
    display: none !important;
  }
  .filter-item{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .filter-item__title{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    text-align: left;
    color: rgba(23, 7, 7, 1);
  }
  .filter-item__list{
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
  }
  .filter-item__text{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);
  }
  .filter-item__container{
    display: flex;
    flex-direction: column;
    gap: 45px;
  }
  .filter-box{
    display: flex;
    flex-direction: row;
    gap: 105px;
  }
  .filter-size-button__text{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);
  }
  .filter-item__button-container{
    display: flex;
    flex-direction: row;
    gap: 5px;
    flex-wrap: wrap;
    max-width: 130px;
  }
  :global(.v-slider-thumb__surface){
    border-radius: 0 !important;
    transform: rotate(45deg);
  }
  :global(.v-slider-track__fill){
    height: 2px !important;
  }
  :global(.v-slider-thumb__label){
    background: none !important;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1) !important;
  }
  :global(.v-slider-thumb__label::before){
    border:none !important;
  }
  :global(.v-label){
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: 0.02em;
    text-align: left;
    color: rgba(23, 7, 7, 1);
    opacity: 1 !important;
  }
  .dark-background{
    position: absolute;
    z-index: 10;
    top: 0;
    left: -50vw;
    width: 1000vw;
    height: calc(100% + 100px);
    background-color: rgba(23, 7, 7, 0.35);
  }
  .filterPadding{
    padding-right: 40px;
  }
  .search-mobile{
    display: none;
    img{
      width: 22px;
      height: 22px;
    }
  }
  .close-mobile{
    display: block;
  }
  .filter-box__container{
    display: flex;
    flex-direction: column;
  }
  .filter-item__mobile{
    display: none;
  }
  .radio-container__mobile{
    display: none;
  }
  .show-button-container{
    display: none;
  }
  .timer-container__mobile{
    display: none;
  }
  .button-text__collection__mobile::first-letter{
    text-transform: uppercase !important;
  }

  .radio-button__square{
    margin-right: 8px;
    width: 20px;
    height: 20px;
    background-image: url(/assets/image/empty_check.svg);
  }

  @media(hover: hover){
    input[type="radio"] + label div:hover,
    input[type="radio"] + label:hover div{
      transform: scale(1.2);
      transition: all ease-in-out 0.2s;    
    } 
  }
  input[type="radio"]:checked + label div {
    background-image: url(/assets/image/check_box.svg);
    transition: all ease-in-out 0.2s;
  }

  @media (max-width: 1440px) {
    .catalog-cards-container{
      padding: 15px;
    }
  }
  @media (max-width: 1200px) {
    .card-item{
      max-width: 33.33%;
      flex: 0 0 33%;
    }
    .card-photo{
      width: 100%;
    }
    .filter-box{
      gap: 50px;
    }
  }
  @media (max-width: 1030px) {
    .timer-container__hidden{
      display: none;
    }
    .timer-container__mobile{
      display: flex;
      margin-top: 25px;
      justify-content: flex-end;
      padding: 0 40px;  
    }
    .catalog-title{
      margin-top: 28px;
      margin-bottom: 34px;
      transform: none;
    }
    .filterButton{
      width: 38px !important;
      height: 38px !important;

    }
    .card-item{
      max-width: calc(50% - 3px);
      flex: 0 0 50%;
    }
    .opennedFilter{
      padding-right: 40px;
    }
    .filter-search{
      display: none;
    }
    .search-mobile{
      display: block;
    }
    .close-mobile{
      display: none;
    }
    .search-box-container{
      display: none;
    }
  }
  @media (max-width: 650px) {
    .catalog-title{
      margin-left: 15px;
      font-size: 36px;
      line-height: 120%;
    }
    .filter-box{
      gap:60px;
      padding: 0 27px;
    }
    .filter-item__container{
      gap:56px;
    }
    .filter-item{
      gap:32px;
    }
    .filter-item__list{
      gap:12px;
    }
    .radio-container__mobile{
      display: flex;
      margin-top: 56px;
      padding: 0 27px;
    }
    .radio-slider{
      display: none;
    }
    .filter-item__button-container{
      max-width: 157px;
    }
    .filter-size-button{
      width: 49px !important;
      height: 49px !important;
    }
    .filter-title{
      margin-left: 11px;
      font-size: 18px;
      line-height: 160%;
    }
    .catalog-cards-container{
      flex-direction: column;
      align-content: center;
    }
    .card-item{
      max-width: 400px;
      max-height: 597;
      flex: 0 0 1;
    }
    .card-photo{
      width: 400px;
      height: 534px;
    }
    .to-basket__button{
      margin: 0;
      width: 103px !important;
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
      width: 275px;
    }
    .filter-container{
      margin-bottom: 30px;
      padding: 0 15px;
    }
    .opennedFilter{
      padding: 12px 15px 35px 15px;
      height: 813px;
    }
    .filter-item__mobile{
      display: flex;
      margin-bottom: 15px;
    }
    .show-button-container{
      display: flex;
      margin-left: auto;
      margin-top: 18px;
    }
    .show-button-text{
      color: rgba(23, 7, 7, 1);
      font-family: Manrope;
      font-size: 18px;
      line-height: 160%;
      text-transform: lowercase;
      margin-right: 20px;
    }
    .show-button-text::first-letter{
      text-transform: uppercase;
    }
    .sub-header-container{
      padding: 0 15px;
    }
    .timer-container__mobile{
      padding: 0 15px;
      gap: 15px;
    }
    .other-collection__link{
      width: 184px;
      height: 38px;
      display: none; // нуужно для версии страницы без таймера
      .button-text__collection{
        display: none;
      }
      .button-text__collection__mobile{
        display: block;
      }
      .button-text__collection__mobile::first-letter{
        text-transform: uppercase !important;
      }
    }
    .button-preorder{
      width: 168px !important;
      height: 38px !important;
    }
    .timer-title{
      font-size: 22px;
      line-height: 120%;
      margin-top: 7px;
    }
  }
</style>