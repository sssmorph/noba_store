<script setup>
	import { ref, computed, onMounted } from 'vue';
	import { shopCart } from '../../stores/cart';
	import { useCatalogFilter } from '../../stores/catalogFilter';
	import { useModal } from '../../stores/modal';
	import { useRoute } from 'vue-router';
	import { getBloger } from '../../composables/getBlogerById';
	import { useBloggers } from '../../composables/useBloggers';

	const router = useRoute();
	const cartStore = useModal(); 
	const filter  = useCatalogFilter();
	const cart = shopCart();

	const blogers = ref([]);
	const bloger = ref(null); 
	const products = ref([]);


	const bloggersData = await useBloggers();
	blogers.value = bloggersData;
  
	const blogerId = blogers.value.find(bloger => bloger.alias === router.params.alias)?.id;
	const blogerData = await getBloger(blogerId);
	bloger.value = blogerData;

	const categories = ref(bloger.value.category);
  
  
  const normalizedCategories = Array.isArray(categories?.value) 
    ? categories.value 
    : (categories?.value ? Object.values(categories.value) : []);
    
  const currentCategories = ref(normalizedCategories.map(category => {
    return {
    categoryName: category.pagetitle,
    categoryId: category.id, 
    categorySelected: false 
    };
  }));
  currentCategories.value.unshift({
    categoryName: "Все категории",
    categoryId: "all",
    categorySelected: true 
  });

	const selectedSort = ref("");

  const productsArray = Array.isArray(bloger.value?.products) ? bloger.value.products : (bloger.value?.products ? Object.values(bloger.value.products) : []);  

  const maxPrice = ref(Math.max(...(Array.isArray(bloger?.value?.products) 
    ? bloger.value.products 
    : (bloger?.value?.products ? Object.values(bloger.value.products) : [])).map(product => product.price)));

const minPrice = ref(Math.min(...(Array.isArray(bloger?.value?.products) 
    ? bloger.value.products 
    : (bloger?.value?.products ? Object.values(bloger.value.products) : [])).map(product => product.price)));


	const prices = ref([minPrice.value, maxPrice.value]);
	const genders = ref([
      { categoryName: "Все", categoryId: "all", categorySelected: true},
      { categoryName: "Женщины", categoryId: "female", categorySelected: false }, 
      { categoryName: "Мужчины", categoryId: "male", categorySelected: false }, 
      { categoryName: "Унисекс", categoryId: "unisex", categorySelected: false },
    ]);
	const filterSizes = ref([
      { categoryName: "XS", categoryId: "XS", categorySelected: false }, 
      { categoryName: "S", categoryId: "S", categorySelected: false }, 
      { categoryName: "M", categoryId: "M", categorySelected: false }, 
      { categoryName: "L", categoryId: "L", categorySelected: false }, 
      { categoryName: "XL", categoryId: "XL", categorySelected: false }
  ]);
  const searchQuery = ref();

  const filterProducts = computed(() => {

    const curentProd = ref(productsArray.slice());

    if (searchQuery.value) {
      curentProd.value = curentProd.value.filter(product => 
        product.pagetitle.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }
    if(prices.value){
      curentProd.value = curentProd.value.filter(product => 
        product.price >= prices.value[0] && product.price <= prices.value[1]
      );
    }
    const selectedSizes = filterSizes.value
      .filter(size => size.categorySelected)
      .map(size => size.categoryId);

    if (selectedSizes.length > 0) {
      curentProd.value = curentProd.value.filter(product => 
        product.size.some(size => selectedSizes.includes(size))
      );
    }
    const selectedGenders = genders.value
      .filter(gender => gender.categorySelected)
      .map(gender => gender.categoryId);

    if (selectedGenders.length > 0) {
      curentProd.value = curentProd.value.filter(product => {
        if (selectedGenders.includes("unisex")) {
          return product.gender === "Унисекс";
        } else if(selectedGenders.includes("all")){
          return product
        } else {
          const genderMap = {
            "female": "Женский",
            "male": "Мужской"
          };
          return selectedGenders.some(gender => genderMap[gender] === product.gender);
        }
      });
    }

    const selectedCategories = currentCategories.value
      .filter(category => category.categorySelected)
      .map(category => category.categoryId);

      if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
        curentProd.value = curentProd.value.filter(product => 
          selectedCategories.includes(product.parent)
        );
      }

    let sortedProducts = curentProd.value.slice();
    if (selectedSort.value === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedSort.value === 'desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts;
  });


	const items = ref([
	{
		title: 'Главная',
		disabled: false,
		href: '/',
	},
	{
		title: `${bloger.value.name}`,
		disabled: true,
		href: `${router.params.alias}`,
	},
	]);
	const itemsMobile = ref([
	{
		title: "< Все коллекции",
		disabled: false,
		href: '/'
	}
	]);

	const openCart = () => {
		cartStore.openCartModal();
	}
	
  const filterIsActive = ref(false);
	const toggleFilter = () => {
		filterIsActive.value = !filterIsActive.value;
	};
	
	const selectCategory = (categoryArray, categoryId) => {
      categoryArray.forEach(category => {
        if (category.categoryId === categoryId) {
          category.categorySelected = !category.categorySelected;
        } else {
          category.categorySelected = false;
        }
      });
    };
	const updateSortOrder = (order) => {
		selectedSort.value = order
	};
  const openError = () =>{
    cartStore.openErrorModal();
  }
  

	const toCart = (product) => {
    let curentProduct = {
      id: product.id,
      title: product.pagetitle,
      image: product.image,
      sizes: product.size,
      size: product.curSize,
      price: product.price,
      count: 1,
    }
    if(!curentProduct.size){
      openError();
    }else{
      cart.addToCart(curentProduct);
    }
	};
  

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
		const bloggersData = await useBloggers();
		blogers.value = bloggersData;
		const blogerId = blogers.value.find(bloger => bloger.alias === router.params.alias)?.id;
		const blogerData = await getBloger(blogerId);

    bloger.value = blogerData;
	});

	useHead({
		title: bloger.value ? bloger.value.longtitle : 'Каталог',
    meta: [
      { name: 'description', content: bloger.value.description }
    ],
    htmlAttrs: {
            lang: 'ru'
        },
	});
</script>

<template lang="html">
  <PlacedOrderModal/>
  <ErrorModal />
  <AppOrder/>
  <AppHeaderBig v-if="bloger" :bloger="bloger"/>
  <CartModal/>
  <InfoFeedBackModal/>
  <section class="catalog-container">
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
        <img src="/assets/image/cart-white.svg" alt="белая корзина"/>
      </v-btn>  
    </div>
    <div class="sub-header-container">
      <v-breadcrumbs :items="items"
      divider="|"
      color="rgba(166, 163, 163, 1)"
      class="breadcrumbs"
      style="padding: 4px 0;
      font-family: Manrope;
      font-weight: 300;
      font-size: 12px;
      line-height: 120%;
      height: 20px;"
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
      <CatalogTimer class="timer-container__hidden"/>
      <div class="buttons-container">
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
          <img  src="/assets/image/cart-white.svg" alt="cart"/>
        </v-btn>
        <NuxtLink to="/" class="other-collection__link">
          <span class="button-text__collection">Другие коллекции</span>
          <span class="button-text__collection button-text__collection__mobile">Еще коллекции</span>
          <img src="/assets/image/shirt.png" alt="shirt"/>          
        </NuxtLink>
        <v-btn
        variant="flat"
        size="34"
        rounded="0"
        color="rgba(221, 58, 26, 1)"
        class="hidden"
        >
          <img src="/assets/image/cart-black.svg" alt="cart"/>
        </v-btn>
      </div>
    </div>
    <CatalogTimer class="timer-container__mobile"/>
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
        @click="toggleFilter()"
        >
          <img src="/assets/image/filter-button.svg" alt="">
        </v-btn>
        <span class="filter-title">Отфильтровать и упорядочить</span>
      </div>
      <v-responsive max-width="390" class="search-box-container"
      :class="{hidden: filterIsActive}"
      >
        <v-text-field class="search-box"
        clearable label="Поиск по названию" 
        variant="underlined"
        append-inner-icon="mdi-magnify"
        base-color="rgba(23, 7, 7, 1)"
        color="rgba(23, 7, 7, 1)"
        v-model="searchQuery"
        >
        </v-text-field>
      </v-responsive>
      <v-btn 
      :class="{hidden: !filterIsActive}"
      class="close-mobile"
      @click="toggleFilter"
      variant="flat"
      color="rgba(23, 7, 7, 1)"
      size="34"
      rounded="0"
      >
        <img  src="/assets/image/white-arrow.svg" alt="" class="button-arrow-filter"/>
      </v-btn>
    </div>
    <div :class="{opennedFilter: filterIsActive, hidden: !filterIsActive}" class="filter-box__container">
  
      <div>
        <div class="filter-box">
          <div class="filter-item">
            <span class="filter-item__title">Категория</span>
            <ul class="filter-item__list">
              <li v-for="(item, index) in currentCategories" :key="index">
                <span class="filter-item__text cursor-pointer" 
                  @click="selectCategory(currentCategories, item.categoryId)" 
                  :class="{ categorySelected: item.categorySelected }">
                  {{ item.categoryName }}
                </span>
              </li>
            </ul>
          </div>
          <div class="filter-item__container">
            <div class="filter-item">
              <span class="filter-item__title">Пол</span>
              <ul class="filter-item__list">
                <li v-for="(item, index) in genders" :key="index">
                  <span class="filter-item__text cursor-pointer" 
                    @click="selectCategory(genders, item.categoryId)" 
                    :class="{ categorySelected: item.categorySelected }">
                    {{ item.categoryName }}
                  </span>
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
                  v-for="(item, index) in filterSizes" 
                  :key="index" 
                  class="filter-size-button" 
                  :class="{ selectedSize: item.categorySelected }" 
                  @click="item.categorySelected = !item.categorySelected">
                  <span class="filter-size-button__text" 
                    :class="{ categorySelected: item.categorySelected }">
                    {{ item.categoryName }}
                  </span>
                </v-btn>
              </div>
            </div>
          </div>
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
                strict
                thumb-label="always"
                step="1"
                v-model="prices"
                :min="minPrice"
                :max="maxPrice">
              </v-range-slider>
            </div>
            <div class="filter-item">
              <span class="filter-item__title">Упорядочить по</span>
              <div class="radio-button-container d-flex flex-column ga-2">
                <div>
                  <input id="radio5" type="radio" name="radio" class="hidden" value="default" :v-model="selectedSort" @change="updateSortOrder('default')"/>
                  <label for="radio5" class="cursor-pointer d-flex flex-row align-center filter-item__text">
                    <div class="radio-button__square"></div>
                    Цена по умолчанию
                  </label>
                </div>
                <div>
                  <input id="radio1" type="radio" name="radio" class="hidden" value="asc" :v-model="selectedSort" @change="updateSortOrder('asc')"/>
                  <label for="radio1" class="cursor-pointer d-flex flex-row align-center filter-item__text">
                    <div class="radio-button__square"></div>
                    Цена по возрастанию
                  </label>
                </div>
        
                <div>
                  <input id="radio2" type="radio" name="radio" class="hidden" value="desc" :v-model="selectedSort" @change="updateSortOrder('desc')"/>
                  <label for="radio2" class="cursor-pointer d-flex flex-row align-center filter-item__text">
                    <div class="radio-button__square"></div>
                    Цена по убыванию
                  </label>
                </div>
              </div>
            </div>
          </div>
          <v-responsive max-width="390" class="search-box-container filter-search" style="margin-top: 12px;">
            <v-text-field class="search-box" clearable label="Поиск по названию" variant="underlined"
              append-inner-icon="mdi-magnify"
              base-color="rgba(23, 7, 7, 1)"
              color="rgba(23, 7, 7, 1)"
              v-model="searchQuery"
              >
            </v-text-field>
          </v-responsive>
        </div>
        <div class="filter-item radio-container__mobile">
          <span class="filter-item__title">Упорядочить по</span>
          <div class="radio-button-container d-flex flex-column ga-2">
            <div>
              <input id="radio6" type="radio" name="radio" class="hidden" value="default" :v-model="selectedSort" @change="updateSortOrder('default')" />
              <label for="radio6" class="cursor-pointer d-flex flex-row align-center filter-item__text">
                <div class="radio-button__square"></div>
                Цена по умолчанию
              </label>
            </div>
            <div>
              <input id="radio3" type="radio" name="radio" class="hidden" value="asc" :v-model="selectedSort"  @change="updateSortOrder('asc')"/>
              <label for="radio3" class="cursor-pointer d-flex flex-row align-center filter-item__text">
                <div class="radio-button__square"></div>
                Цена по возрастанию
              </label>
            </div>
            <div>
              <input id="radio4" type="radio" name="radio" class="hidden" value="desc" :v-model="selectedSort"  @change="updateSortOrder('desc')"/>
              <label for="radio4" class="cursor-pointer d-flex flex-row align-center filter-item__text">
                <div class="radio-button__square"></div>
                Цена по убыванию
              </label>
            </div>
          </div>
        </div>
        <v-responsive max-width="100%" class="search-box-container filter-search mobile-search" style="margin-top: 12px;">
          <v-text-field class="search-box" clearable label="Поиск по названию" variant="underlined"
            append-inner-icon="mdi-magnify"
            base-color="rgba(23, 7, 7, 1)"
            color="rgba(23, 7, 7, 1)"
            v-model="searchQuery"
            >
          </v-text-field>
        </v-responsive>
    
        <v-btn variant="outlined" width="157" height="38" rounded="0" color="rgba(221, 58, 26, 1)" class="show-button-container" @click="toggleFilter">
          <span class="show-button-text">Показать</span>
          <img src="/assets/image/filter-show-arrow.svg" alt="arrow" />
        </v-btn>
      </div>
        </div>
      <div class="catalog-cards-container " >
        <div class="dark-background" :class="{hidden: !filterIsActive}" @click="filterIsActive = false"></div>

        
        <div  v-for="product in filterProducts" :key="product.id" class="card-item">
          <NuxtLink :to="{name: 'alias-card', params: {alias: bloger.alias, card: product.alias } }" >
            <NuxtImg format="webp" loading="lazy" quality="80" v-if="product.image" :src="`http://api.noba.store${product.image}`" class="card-photo" alt="product photo"/>
            <div v-else class="card-photo d-flex justify-center align-center bg-f1">
              <img  src="~/assets/image/Camera.svg" class="contain h-25 w-25" alt="Camera"/>
            </div>
          </NuxtLink>
          <NuxtLink class="card-item-bottom" :to="{name: 'alias-card', params: {alias: bloger.alias, card: product.alias } }">
            <div class="card-item-bottom__header">
              <span class="item-name">{{ product.pagetitle }}</span>
              <span class="item-price">{{ product.price }}₽</span>
            </div>

          </NuxtLink>
          <div class="size-container">
            <button
            v-for="currentSize in product.size" :key="currentSize" :value="currentSize"
            class="size-button" :class="{cardSizeButton: currentSize == product.curSize}"
            @click="product.curSize = currentSize"
            >{{currentSize}}</button>
          </div>
          <div class="to-basket-container">
            <v-btn
              class="to-basket__button"
              variant="outlined"
              width="112"
              height="28"
              rounded="0"
              color="rgba(221, 58, 26, 1)"
              @click="toCart(product)"
            >
              <span class="to-basket">В корзину</span>
              <div class="to-basket__image"></div>
            </v-btn>
          </div>
        </div>
      </div>
  </section>
  <AppFooter/>
</template>

<style lang="scss" scoped>
 *{
  transition: 0.2s all ease-in-out;
 }
 :global(.v-field__outline){
  border-bottom: 2px black solid !important;
 }
 .bg-f1{
  background-color: #f1f1f1;
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
    gap: 35px 5px;
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
      scale: 1.02;
      top: 0;
      left: 0;
      transform: translateY(6px);
      .card-photo{
        height: 502px;
        width: 376px;
      }
      .size-container{
        display: flex;
        opacity: 1;
      }
      .to-basket-container{
        bottom: -12px;
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
    position: absolute;
    bottom: 0px;
    right: 10.5px;
  }
  .to-basket__image{
    width: 14px;
    height: 13px;
    background-image: url(/assets/image/to-basket-black.svg);
  }
  .to-basket__button:hover{
    background-color: rgba(221, 58, 26, 1);
    .to-basket{
      color: rgba(255, 252, 251, 1);
    }
    .to-basket__image{
      background-image: url(/assets/image/to-basket-white.svg);
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
    display: none;
    opacity: 0;
    left: 0;
    right: 0;
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
  .filter-size-button{
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid rgba(23, 7, 7, 1);
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
    overflow: hidden;
    width: 200vw;
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
  .breadcrumbs__mobile{
    display: none;
  }
  .radio-button__square{
    margin-right: 8px;
    width: 20px;
    height: 20px;
    background-image: url(/assets/image/empty_check.svg);
  }
  .radio-button__square:checked{
    background-image: url(/assets/image/check_box.svg);
    transition: all ease-in-out 0.2s;
  }
  .categorySelected{
    color: rgba(221, 58, 26, 1);
  }
  .selectedSize{
    border: rgba(221, 58, 26, 1) 1px solid;
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
    top: 0px;
    opacity: 1;
  }
  .fixed{
    position: sticky;
    top: 0;
    right: 50px;
    z-index: 100;
  }
  .contain{
    object-fit: contain;
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
  .button-text__collection__mobile{
    display: none;
  }
  .mobile-search{
    display: none;
  }
  .in-cart {
    border: 1px solid black;
    }
    .in-cart:hover {
      background-color: black;
      color: white;
    }
  
  @media (max-width: 1650px) {
      .card-item:hover{
        .card-photo{
          height: 475px;
          width: 100%;
        }
        .size-container{
          display: flex;
          opacity: 1;
          top: 430px
        }
      }
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
    @media(hover: hover){
      .card-item:hover{
        height: 582px;
        .card-photo{
          height: 475px;
        }
      }
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
  @media (max-width: 1024px) {
    .mobile-search{
      display: flex;
      margin-top: 10px
    }
    .opennedFilter{
      height: 490px;
    }
    .card-item:hover{
      scale: none;
      transform: translateY(0px);
      .to-basket-container{
        bottom: 0;
      }
      .size-container{
        top: 475px;
      }
    }
    .size-container{
      display: flex;
      opacity: 1;
      top: 430px;
    }

  }
  @media (max-width: 640px) {
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
      max-height: 597px;
      flex: 0 0 100%;
      width: 100%;
    }
    .card-item:hover{
      .to-basket-container{
        bottom: 9px;
      }
    }
    .card-photo{
      width: 400px;
      height: 534px;
    }
    .to-basket-container{
      bottom: 9px;
      right: 6px;
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
      width: calc(100% - 113px);
      height: 28px;
      align-items: center;
    }
    .filter-container{
      margin-bottom: 30px;
      padding: 0 15px;
    }
    .opennedFilter{
      padding: 12px 15px 35px 15px;
      height: 835px;
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
    .breadcrumbs{
      display: none;
    }
    .breadcrumbs__mobile{
      display: block;
    }
    .card-item:hover{
      scale: none;
      .card-photo{
        height: 534px;
        width: 100%;
      }
    }
    .size-container{
      top: 475px;
    }
  }
  @media (max-width: 600px) {
    .sticky-basket{
      padding-right: 15px;
    }
  }
  @media (max-width: 430px) {
    .opennedFilter{
      height: 865px;
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