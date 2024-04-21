<script>
const orderItems = ref(["Контакты", "Адрес доставки", "Оплата"])
</script>

<template>
    <section class="order-background">
        <div class="order-container">
            <h1 class="order-title">Оформление заказа</h1>
            <div class="stepper-container">
                <div class="stepper-line"></div>
                <div class="stepper-line__fill first-line"></div>
                <div class="stepper-line__fill second-line"></div>
                <div class="thumb-square thumb-square-fill first-thumb"></div>
                <div class="thumb-square second-thumb"></div>
                <div class="thumb-square third-thumb"></div>
                <span class="label first-label label-active">Контакты</span>
                <span class="label second-label">Адрес доставки</span>
                <span class="label third-label">Оплата</span>
            </div>
            <v-btn
            class="next-button"
            variant="flat"
            size="73"
            color="rgba(221, 58, 26, 1)"
            rounded="0">
            <img src="/assets/image/menu-arrow.svg" alt="" class="arrow-button">
            </v-btn>
        </div>
    </section>
</template>

<style lang="scss" scoped>
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
        width: 658px;
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
</style>