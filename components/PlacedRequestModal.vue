<script>
export default {
    setup() {
        
    },
}
</script>

<template>
    <transition>
        <section class="modal-background">
            <div class="modal-container">
                <div class="content-container">
                    <img src="/assets/image/girl.svg" alt="">
                    <p class="content-text">Спасибо за оставленную заявку, мы свяжемся с Вами в ближайшее время.</p>
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
        padding: 35px; 
    }
    .content-container{
        display: flex;
        flex-direction: row;
        gap: 43px;
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
        margin-top: 12px;
    }
    @media (max-width:800px) {
        .modal-container{
            padding: 29px 22px 38px 17px;
            width: 400px;
            height: 227px;

        }
        .content-container{
            gap: 17px;
            img{
                width: 101px;
                height: 160px;
            }
        }
        .close-button{
            width: 49px !important;
            height: 49px !important;
        }
        .content-text{
            font-size: 18px;
            line-height: 160%;
            margin-top: 11px;
            height: 120px;
        }
    }
</style>