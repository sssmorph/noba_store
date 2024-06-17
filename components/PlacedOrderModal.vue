<script setup>

</script>

<template>
    <transition>
        <section class="modal-background">
            <div class="modal-container">
                <div class="content-container">
                    <img src="/assets/image/woman_shopping.svg" alt="">
                    <p class="content-text">Ваш заказ успешно оформлен, Вся информация о совершенной покупке была отправлена вам на почту.</p>
                </div>
                <v-btn
                class="close-button"
                variant="flat"
                size="58"
                color="rgba(221, 58, 26, 1)"
                rounded="0"
                >
                <img src="/assets/image/close-modal-black.svg" alt="">
                </v-btn>
            </div>
        </section>
    </transition>
</template>

<style lang="scss" scoped>
    .modal-background{
        background-color: rgba(23, 7, 7, 0.5);
        position: fixed;
        z-index: 10;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-container{
        width: 502px;
        height: 270px;
        background-color: rgba(255, 252, 251, 1);
        box-shadow: 3px 3px 4px 0px rgba(107, 86, 81, 0.25);
        position: relative;
        padding: 42px 29px 49px 26px; 
    }
    .content-container{
        display: flex;
        flex-direction: row;
        gap: 24px;
    }
    .close-button{
        position: absolute;
        bottom: 0;
        right: 0;
        img{
            pointer-events: none;
        }
    }
    .content-text{
        font-family: Manrope;
        font-size: 22px;
        font-weight: 400;
        line-height: 35.2px;
        letter-spacing: -0.02em;
        text-align: left;
        color: rgba(23, 7, 7, 1);
        max-width: 300px;
        margin-top: 5px;
    }
    @media (max-width: 800px) {
        .modal-container{
            width: 400px;
            height: 227px;
            padding: 32px 22px 40px 12px;
        }
        .content-container{
            gap: 15px;
            img{
                width: 108px;
                height: 155px;
            }
        }
        .close-button{
            width: 49px !important;
            height: 49px !important;
        }
        .content-text{
            margin-top: 8px;
            font-size: 18px;
            line-height: 160%;
        }
    }
</style>