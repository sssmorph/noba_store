<script setup>
import { ref, computed } from 'vue';
import { vMaska } from 'maska';
import { useModal } from '../stores/modal'; 
import { useAppOrder } from '~/stores/appOrder';
import { getDocument } from '~/composables/getDocument';
import { defineRule, useForm, Field as VeeField, Form as VeeForm } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { shopCart } from '../stores/cart';

defineRule('customEmail', value => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value) || 'Поле должно быть действительным электронным адресом.';
});

defineRule('required', required);
defineRule('email', email);
const cart = shopCart();

if(cart.productInCart.length === 0){
    cart.getProductInCart()
}
const normalizedCart = ref(cart.productInCart.map(product => {
    return{
        id: product.id,
        pagetitle: product.title,
        price: product.price,
        gallery: product.image,
        size: product.size,
        count: product.count
    }
}))
const appOrder = useAppOrder();
const privacy = await getDocument(37);



const cartModalStore = useModal();
const closeAppOrder = () => {
  cartModalStore.closeAppOrder();
  appOrder.resetStage();
};
const openPlaceOrder = () =>{
    cartModalStore.openPlacedOrder();
}

const showModal = computed(() => cartModalStore.appOrder);

const { handleSubmit, setFieldValue, values } = useForm({
  initialValues: {
    fullName: '',
    phone: '',
    email: '',
    postalCode: '',
    city: '',
    street: '',
    building: '',
    apartment: ''
  }
});

const toDeliveryAdress = async () => {

  appOrder.toSecondStage();
};

const purchase = handleSubmit(async (values) => {
  const arr = JSON.stringify(normalizedCart.value);
  const params = new URLSearchParams(); 
  params.append('postcart', arr);
  params.append('delivery', 1);
  params.append('payment', 1);
  params.append('email', values.email);
  params.append('name', values.fullName);
  params.append('phone', values.phone);
  params.append('city', values.city);
  params.append('street', values.street);
  params.append('building', values.building);
  params.append('apartment', values.apartment);
  params.append('index', values.postalCode);
  params.append('customer', values.fullName)
  try {
    const response = await fetch('http://api.noba.store/api/order', {
      method: 'POST',
      body: params
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    console.log(data.object.response.data);
    getOrderStatus(data.object.response.data.msorder); 
    appOrder.resetStage();
  } catch (error) {
    console.error('Error:', error); 
  }
  
});

async function getOrderStatus(id) {
  try {
    const response = await fetch(`http://api.noba.store/api/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (data.object.status == '1') {
      await postEditOrder(id);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function postEditOrder(id) {
  try {
    const response = await fetch('http://api.noba.store/api/orderedit/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        status: 2 
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    cart.clearCart()
    closeAppOrder();

    openPlaceOrder();
  } catch (error) {
    
    console.error('Error:', error);
  }
}
</script>

<template>
  <section class="order-background" v-if="showModal">
    <div class="background" @click="closeAppOrder()"></div>
    <div class="order-container">
      <h1 class="order-title">Оформление заказа</h1>
      <div class="stepper-container">
        <div class="stepper-line"></div>
        <div class="first-line" :class="{ 'stepper-line__fill': (appOrder.orderStage[1].stageStatus)}"></div>
        <div class="thumb-square thumb-square-fill first-thumb"></div>
        <div class="thumb-square second-thumb" :class="{'thumb-square-fill': (appOrder.orderStage[1].stageStatus)}"></div>
        <span class="label first-label cursor-pointer" @click="appOrder.resetStage()" :class="{'label-active': appOrder.orderStage[0].stageStatus}">
          Контакты
        </span>
        <span class="label second-label cursor-pointer" @click="toDeliveryAdress()" :class="{'label-active': appOrder.orderStage[1].stageStatus}">
          Адрес доставки
        </span>
      </div>

      <form @submit="purchase">
        <div class="page first-page" :class="{'page-active': appOrder.orderStage[0].stageStatus}">
          <div class="input-container input-container__big">
            <VeeField name="fullName" rules="required" v-slot="{ field, meta }">
              <input v-bind="field" type="text" placeholder="ФИО" class="input-field" />
              <img v-if="meta.valid && meta.touched" src="/assets/image/validate-arrow.svg" alt="valid" class="validate-image"/>
              <img v-else-if="!meta.valid && meta.touched" src="/assets/image/cross.svg" alt="invalid" class="validate-image"/>
            </VeeField>
          </div>
          <div class="double-input-container">
            <div class="input-container input-container__small">
              <VeeField name="phone" rules="required" v-slot="{ field, meta }">
                <input v-bind="field" type="text" placeholder="+7  (         ) " class="input-field" v-maska data-maska="###########"/>
                <img v-if="meta.valid && meta.touched" src="/assets/image/validate-arrow.svg" alt="valid" class="validate-image"/>
                <img v-else-if="!meta.valid && meta.touched" src="/assets/image/cross.svg" alt="invalid" class="validate-image"/>
              </VeeField>
            </div>
            <div class="input-container input-container__small">
              <VeeField name="email" rules="required|email" v-slot="{ field, meta }">
                <input v-bind="field" type="text" placeholder="E-mail" class="input-field" />
                <img v-if="meta.valid && meta.touched" src="/assets/image/validate-arrow.svg" alt="valid" class="validate-image"/>
                <img v-else-if="!meta.valid && meta.touched" src="/assets/image/cross.svg" alt="invalid" class="validate-image"/>
              </VeeField>
            </div>
          </div>
        </div>

        <div class="page second-page" :class="{'page-active': appOrder.orderStage[1].stageStatus}">
          <div class="double-input-container">
            <div class="input-container input-container__small">
              <VeeField name="postalCode" rules="required" v-slot="{ field, meta }">
                <input v-bind="field" type="text" placeholder="Индекс" class="input-field" v-maska data-maska="######"/>
                <img v-if="meta.valid && meta.touched" src="/assets/image/validate-arrow.svg" alt="valid" class="validate-image"/>
                <img v-else-if="!meta.valid && meta.touched" src="/assets/image/cross.svg" alt="invalid" class="validate-image"/>
              </VeeField>
            </div>
            <div class="input-container input-container__small">
              <VeeField name="city" rules="required" v-slot="{ field, meta }">
                <input v-bind="field" type="text" placeholder="город" class="input-field"/>
                <img v-if="meta.valid && meta.touched" src="/assets/image/validate-arrow.svg" alt="valid" class="validate-image"/>
                <img v-else-if="!meta.valid && meta.touched" src="/assets/image/cross.svg" alt="invalid" class="validate-image"/>
              </VeeField>
            </div>
          </div>
          <div class="input-container input-container__big">
            <VeeField name="street" rules="required" v-slot="{ field, meta }">
              <input v-bind="field" type="text" placeholder="Улица" class="input-field" />
              <img" v-if="meta.valid && meta.touched" src="/assets/image/validate-arrow.svg" alt="valid" class="validate-image"/>
              <img v-else-if="!meta.valid && meta.touched" src="/assets/image/cross.svg" alt="invalid" class="validate-image"/>
            </VeeField>
          </div>
          <div class="double-input-container">
            <div class="input-container input-container__small">
              <VeeField name="building" rules="required" v-slot="{ field, meta }">
                <input v-bind="field" type="text" placeholder="Дом, строение" class="input-field" />
                <img v-if="meta.valid && meta.touched" src="/assets/image/validate-arrow.svg" alt="valid" class="validate-image"/>
                <img v-else-if="!meta.valid && meta.touched" src="/assets/image/cross.svg" alt="invalid" class="validate-image"/>
              </VeeField>
            </div>
            <div class="input-container input-container__small">
              <VeeField name="apartment" rules="" v-slot="{ field, meta }">
                <input v-bind="field" type="text" placeholder="Квартира" class="input-field" />
                <img v-if="meta.valid && meta.touched" src="/assets/image/validate-arrow.svg" alt="valid" class="validate-image"/>
                <img v-else-if="!meta.valid && meta.touched" src="/assets/image/cross.svg" alt="invalid" class="validate-image"/>
              </VeeField>
            </div>
          </div>
        </div>
        <div class="third-page__bottom" :class="{hidden: !appOrder.orderStage[1].stageStatus }">
          <div class="personal-data__container">
            <span class="personal-data">Нажимая кнопку, я подтверждаю своё согласие на </span>
            <NuxtLink :to="{ name: 'document-alias', params: { alias: 'politika-konfedenczialnosti' } }" class="personal-data__link">обработку персональных данных</NuxtLink>
          </div>
          <v-btn class="d-flex flex-row purchase-button"  variant="flat" color="rgba(221, 58, 26, 1)" rounded="0" width="230" height="52" @click="purchase()">
            <span class="purchase-text">Оплатить</span>
            <img src="/assets/image/purchase.svg" alt="" class="buy-button"/>
          </v-btn>
        </div>
        <v-btn class="next-button" variant="flat" size="73" color="rgba(221, 58, 26, 1)" rounded="0" @click="toDeliveryAdress()" :class="{hidden: !appOrder.orderStage[0].stageStatus }">
          <img src="/assets/image/menu-arrow.svg" alt="" class="arrow-button"/>
        </v-btn>
    </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
    .validate-image{
        max-width: 22px;
        max-height: 22px;
    }

    .order-background{
        background-color: rgba(23, 7, 7, 0.35);
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .order-container{
        background-color: rgba(255, 252, 251, 1);
        width: 1126px;
        height: 663px;
        padding: 65px 0 80px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .order-title{
        font-family: Manrope;
        font-size: 36px;
        font-weight: 500;
        line-height: 57.6px;
        text-align: left;
        color: rgba(23, 7, 7, 1);
    }
    .arrow-button{
        pointer-events: none;
        transform: rotate(-90deg) translateY(4px);
    }
    .next-button{
        position: absolute;
        right: 120px;
        bottom: 85px;
    }
    .stepper-container{
        position: relative;
        margin-top: 72px;
    }
    .stepper-line{
        width: 330px;
        height: 2px;
        background-color: rgba(166, 163, 163, 1);
    }
    .stepper-line__fill{
        height: 2px;
        width: 330px;
        background-color: rgba(221, 58, 26, 1);
    }
    .thumb-square{
        width: 8px;
        height: 8px;
        background-color: rgba(166, 163, 163, 1);
        transform: rotate(45deg);
    }
    .thumb-square-fill{
        background-color: rgba(221, 58, 26, 1);
    }
    .first-thumb{
        position: absolute;
        top: -3px;
    }
    .second-thumb{
        position: absolute;
        top: -3px;
        left: 326px;
        
    }
    .third-thumb{
        position: absolute;
        top: -3px;
        right: 0;
    }
    .first-line{
        position: absolute;
        top: 0;
    }
    .second-line{
        position: absolute;
        right: 0;
        top: 0;
    }
    .label{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 25.6px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(166, 163, 163, 1);
        position: absolute;
        top: -32px;
    }
    .label-active{
        color: rgba(23, 7, 7, 1);
    }
    .first-label{
        transform: translateX(4px);
    }
    .second-label{
        transform: translateX(330px);
    }
    .third-label{
        transform: translateX(658px);
    }
    .page{
        display: none;
        width: 0;
    }
    .first-page{
        margin-top: 100px;
    }
    .second-page{
        margin-top: 25px;
    }
    .third-page{
        margin-top: 25px;
    }
    .page-active{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 710px;
        gap: 25px;
    }
    .double-input-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 44px;
    }
    .input-container{
        padding: 13px 6px 13px 22px;
        border-bottom: solid 1.5px rgba(23, 7, 7, 1);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .input-container__big{
        width: 580px;
    }
    .input-container__small{
        width: 268px;
    }
    input:focus, textarea:focus, select:focus {
        outline: none !important;
    }
    input{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 25.6px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(23, 7, 7, 1);
    }
    .purchase-text{
        font-family: Manrope;
        font-size: 22px;
        font-weight: 400;
        line-height: 35.2px;
        letter-spacing: -0.02em;
        text-align: left;
        color: rgba(255, 252, 251, 1);
        text-transform: lowercase;
        margin-right: 50px;
    }
    .purchase-text::first-letter{
        text-transform: uppercase;
    }
    .personal-data{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 25.6px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(166, 163, 163, 1);
    }
    .personal-data__link{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 25.6px;
        letter-spacing: 0.02em;
        text-align: left;
        color: rgba(221, 58, 26, 1);
        text-decoration: underline rgba(221, 58, 26, 1) 0.5px;
        text-decoration-skip-ink: none;
    }
    .personal-data__container{
        max-width: 390px;
    }
    .third-page__bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 75px;
        width: 710px;
    }
    input{
        width: 100%;
    }
    .background{
        width: 100vw;
        height: 100vh;
        position: absolute;
    }
    .hidden{
        display: none;
    }
    @media (max-width: 1200px) {
        .order-container{
            width: 820px;
            padding: 44px 15px 32px 15px;
        }
        .next-button{
            bottom: 56px;
            right: 15px;
        }
        .first-page{
            margin-top: 55px;
        }
        .second-page{
            margin-top: 55px;
        }
        .third-page{
            margin-top: 60px;
        }
        .third-page__bottom{
            margin-top: 7px;
        }
    }
    @media (max-width: 900px) {
        .input-container{
            padding: 8px 6px 8px 12px;
        }
        .order-container{
            width: 650px;
            height: 558px;
        }
        .stepper-line{
            width: 199px;
        }
        .stepper-line__fill{
            width: 199px;

        }
        .second-thumb{
            left: 200px;
        }
        .label{
            font-size: 14px;
            line-height: 160%;
        }
        .second-label{
            transform: translateX(150px)
        }
        .third-label{
            transform: translateX(340px);
        }
        .first-page{
            max-width: 580px;
        }
        .second-page{
            max-width: 580px;
        }
        .third-page{
            max-width: 580px;
        }
        input{
            font-size: 14px;
            line-height: 160%;
        }
        .next-button{
            width: 49px !important;
            height: 49px !important;
        }
        .arrow-button{
            width: 35px;
            height: 20px;
        }
        .third-page__bottom{
            flex-direction: column;
            align-items: flex-end;
            max-width: 580px;
            gap: 15px;
        }
        .purchase-button{
            width: 157px !important;
            height: 38px !important;
        }
        .purchase-text{
            font-size: 18px;
            line-height: 160%;
            margin-right: 28px;
        }
        .personal-data__container{
            margin-right: auto;
        }
    }
    @media (max-width: 700px) {
        .order-container{
            width: 430px;
        }
        .order-title{
            font-size: 24px;
            line-height: 160%;
        }
        .stepper-container{
            margin-top: 66px;
        }
        .input-container{
            width: 400px !important;
            
        }
        .input-container__big{
            width: 400px;
        }
        .input-container__small{
            width: 185px !important;
            input{
                width: 146px;
            }
        }
        .double-input-container{
            width: 400px !important;
            gap: 30px;
        }
        .first-page{
            max-width: 400px;
        }
        .second-page{
            max-width: 400px;
        }
        .third-page{
            max-width: 400px;
        }
        .third-page__bottom{
            width: 400px;
        }
    }
</style>