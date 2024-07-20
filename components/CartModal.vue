<script setup>


    import { useModal } from '../stores/modal'; 
    import { shopCart } from '../stores/cart'; 
    const cartModalStore = useModal();
    const cart = shopCart();

    const product = computed(() => cart.productInCart);
    cart.getProductInCart();

    const placeOrder = () => {
        cart.clearCart();
    };
    const removeFromCart = (index) => {
        cart.removeProduct(index);
        cart.updateStorage();
    };
    const plusCartCount = (index) => {
        if (index > -1 && index < cart.productInCart.length) {
            cart.productInCart[index].count++;
            cart.updateStorage();
        }
    }
    const minusCartCount = (index) => {
        if (cart.productInCart[index].count <= 1) {
            cart.removeProduct(index);
        } else {
            cart.productInCart[index].count--;
            cart.updateStorage();
        }
    };
    const updateSize = (index) => {
        cart.productInCart[index].size = product.value[index].size;
        cart.updateStorage();
    };
    const closePopup = () => {
    cartModalStore.closeCartModal();
    };
    const showModal = computed(() => cartModalStore.cartIsOpen);

</script>

<template>
        <section class="popup-container" >
            <div v-if="showModal" class="popup-background" @click="closePopup"></div>
            <transition name="fade" >
                <div class="popup-cart-container" v-if="showModal">
                    <div class="popup-cart">
                        <v-btn
                        class="close-popup"
                        size="34"
                        variant="flat"
                        color="rgba(23, 7, 7, 1)"
                        rounded="0"
                        @click="closePopup"
                        >
                        <img src="/assets/image/white-arrow.svg" style="pointer-events:none;">

                        </v-btn>

                        <div v-for="(item, index) in product" :key="index" class="product-in-cart">
                            <img :src="'http://api.noba.store' + item.image" class="product-photo">
                            <div class="product-information-container">
                              <span class="product-name">{{ item.title }}</span>
                              <div class="product-information">
                                <div class="product product-size">
                                  <span class="product-title">Размер</span>
                                  <div class="select-style">
                                    <select name="" id="sizes" class="cursor-pointers" @change="updateSize(index)">
                                        <option v-for="size in item.sizes" :key="size" :value="size">{{ size }}</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="product product-count">
                                  <span class="product-title">Количество</span>
                                  <div class="value-container">
                                    <button class="product-value product-value__hover" 
                                    @click="minusCartCount(index)"
                                    >-</button>
                                    <span class="product-value ">{{ item.count }}</span>
                                    <button class="product-value product-value__hover" 
                                    @click="plusCartCount(index)"
                                    >+</button>
                                  </div>
                                </div>
                                <div class="product product-price">
                                  <span class="product-title">Цена</span>
                                  <span class="product-value">{{ item.price }}₽</span>
                                </div>
                                <div class="product product-total-price">
                                  <span class="product-title">Стоимость</span>
                                  <span class="product-value">{{ item.price * item.count }} ₽</span>
                                </div>
                              </div>
                              <div class="mobile-product-price">
                                <span class="product-title-bold">Стоимость</span>
                                <span class="product-value-bold">{{ item.price * item.count }} ₽</span>
                              </div>
                            </div>
                            <v-btn class="cross-button" variant="plain" size="31" rounded="0" @click="removeFromCart(index)">
                              <img src="/assets/image/cross.svg" alt="" style="pointer-events:none;">
                            </v-btn>
                          </div>

                        <div class="popup-cart-bottom">
                            <v-responsive max-width="307" class="search-box-container">
                                <v-text-field class="promo-code-box"
                                clearable label="Промо-код" 
                                variant="underlined"
                                append-inner-icon="mdi-chevron-right"
                                base-color="rgba(23, 7, 7, 1)"
                                color="rgba(23, 7, 7, 1)"
                                >
                                </v-text-field>
                            </v-responsive>
                            <div class="price-container">
                                <span class="without-sale">13500 ₽</span>
                                <span class="current-price">{{ cart.totalCartPrice }} ₽</span>
                            </div>
                        </div>
                        <div class="to-order-container">
                            <v-btn
                            class="to-order-button"
                            variant="flat"
                            width="307"
                            height="52px"
                            color="rgba(221, 58, 26, 1)"
                            rounded="0"
                            >
                            <span class="to-order-text">Перейти к оформлению</span>
                            <img src="/assets/image/text-box-white.svg" alt="">
                            </v-btn>
                        </div>

                    </div>
                </div>
            </transition>
        </section>
</template>

<style lang="scss" scoped>  
    .select-style {
        position: relative;
        padding: 0;
        margin: 0;
        border-radius: 3px;
        overflow: visible;
        background-color: #fff;

        background:  url("http://www.scottgood.com/jsg/blog.nsf/images/arrowdown.gif") no-repeat 90% 50%;
        cursor: pointer;
    }
    .select-style:after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        top: 9px;
        right: 0;
        border-top: 5px solid transparent;
        border-left: 5px solid #fff;
        border-right: 5px solid #fff;
        background-color: rgb(23, 7, 7);
    }
    .select-style select {
        position: relative;
        z-index: 10;
        padding: 5px 8px;
        padding-right: 15px;
        padding-top: 0;
        border: none;
        box-shadow: none;
        color: rgb(23, 7, 7);
        font-family: Manrope;
        background-color: transparent;
        background-image: none;
        -webkit-appearance: none;
        -moz-appearance: none;
                appearance: none;
    }
    .select-style select:focus {
        outline: none;
    }
    option{
        text-align: center;
    }
    .product-value__hover{
        transition: all ease-in-out 0.2s;
    }
    .product-value__hover:hover{
        transition: all ease-in-out 0.2s;
        scale: 1.5;
    }
    .popup-container{
        z-index: 9999;
    }
    .popup-background{
        background-color: rgba(23, 7, 7, 0.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 3;
    }
    .popup-cart-container{
        background-color: rgba(255, 252, 251, 1);
        height: 100%;
        width: 50%;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 5;
        
    }  
    .popup-cart{
        background-color: rgba(255, 252, 251, 1);
        max-width: 737px;
        width: 100%;
        height: 100%;
        padding: 30px 40px;
        overflow: scroll;
    }
    .close-popup{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 44px;
        img{
            transform: translateX(2px);
        }
    }
    .product-in-cart{
        padding-bottom: 22px;
        border-bottom: 1.5px solid rgba(166, 163, 163, 1);
        width: 100%;
        margin-bottom: 22px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .product-photo{
        width: 117px;
        height: 117px;
        object-fit: cover;
    }
    .product-name{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.2px;
        text-align: left;
        color: rgba(23, 7, 7, 1);
        margin-top: 9px;
    }
    .product-information-container{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .product-information{
        display: flex;
        flex-direction: row;
        gap: 67px;

    }
    .product{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap:13px;
    }
    .product-title{
        font-family: Manrope;
        font-size: 12px;
        font-weight: 300;
        line-height: 14.4px;
        text-align: left;
        color: rgba(23, 7, 7, 1);

    }
    .product-value{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
        letter-spacing: -0.02em;
        text-align: left;
        color: rgba(23, 7, 7, 1);
        font-variant-numeric: tabular-nums;
    }
    .cross-button{
        margin-top: 10px;
    }
    .popup-cart-bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .promo-code-box{
        margin-top: 11px;
    }
    .v-field__append-inner{
        margin-right: 13px !important;
    }
    .price-container{
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: flex-end;
    }
    .without-sale{
        text-decoration: line-through rgba(221, 58, 26, 1) solid 1.5px;
        font-family: Manrope;
        font-size: 42px;
        font-weight: 300;
        line-height: 50.4px;
        text-align: left;
        color: rgba(166, 163, 163, 1);
        margin-top: 22px;

    }
    .current-price{
        font-family: Manrope;
        font-size: 48px;
        font-weight: 300;
        line-height: 57.6px;
        text-align: left;
        color: rgba(23, 7, 7, 1);
    }
    .to-order-container{
        display: flex;
        justify-content: flex-end;
        margin-block: 44px;
    }
    .to-order-text{
        text-transform: lowercase;
        font-family: Manrope;
        font-size: 22px;
        font-weight: 400;
        line-height: 35.2px;
        letter-spacing: -0.02em;
        text-align: left;
        color: rgba(255, 252, 251, 1);
        margin-right: 12px;
    }
    .to-order-text::first-letter{
        text-transform: uppercase;
    }
    .value-container{
        display: flex;
        flex-direction: row;
        gap:10px;
    }
    .mobile-product-price{
        display: none;
    }

    .fade-enter-from{
        transform: translateX(100px);
        opacity: 0;
    }
    .fade-enter-active {
        transition: all .5s ease;
      }
    .fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .fade-enter, .fade-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(100px);
        opacity: 0;
      }

    @media (max-width:1400px) {
        .popup-cart-container{
            width: 70%;
        }
    }
    @media (max-width: 1024px) {
        .product-information{
            gap: 48px;
        }
    }
    @media (max-width: 900px) {
        .popup-cart{
            padding: 15px 10px 15px 15px;
        }
    }
    @media (max-width: 800px) {
        .close-popup{
            margin-bottom: 25px;
        }
        .product-photo{
            width: 103px;
            height: 103px;
        }
        .product-name{
            margin-top: 0;
            font-size: 14px;
            line-height: 120%;
        }
        .search-box-container{
            max-width: 211px !important;
        }
        .to-order-button{
            width: 265px !important;
            height: 38px !important;
        }
        .to-order-text{
            font-size: 18px;
            line-height: 160%;
        }
        .to-order-container{
            margin-block: 24px;
        }
        .current-price{
            font-size: 38px;
            line-height: 160%;
        }
        .without-sale{
            font-size: 32px;
            line-height: 160%;
            margin-top: 0;
        }
        .price-container{
            gap:0;
        }
        :global(.v-field__append-inner) {
            margin-right: 13px !important;
        }
        .product-title-bold{
            font-family: Manrope;
            font-size: 14px;
            font-weight: 700;
            line-height: 120%;
            color: rgba(23, 7, 7, 1);
        }
        .product-value-bold{
            font-family: Manrope;
            font-size: 18px;
            font-weight: 400;
            line-height: 28.8px;
            letter-spacing: -0.02em;
            text-align: left;
        }
        .product-total-price{
            display: none;
        }
        .mobile-product-price{
            display: flex;
            flex-direction: row;
            gap: 33px;
            justify-content: flex-end;
            align-items: center;
        }
        .product-information{
            margin-top: 15px;
            gap: 48px;
        }
        .product-information-container{
            gap: 20px;
        }
    }
    @media (max-width: 680px) {
        .popup-cart-container{
            width: 100%;
        }
    }
    @media (max-width: 400px) {
        .product-information{
            gap: 15px;
        }
        .popup-cart-bottom{
            flex-direction: column-reverse;
        }
    }
</style>