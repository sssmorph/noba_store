<script setup>
  import { useModal } from '../stores/modal';

    const cartStore = useModal();
    const openCart = () =>{
        cartStore.openCartModal()
    }

</script>


<template>
    <header class="">
        <div class="header-wrapper d-flex flex-row justify-space-between align-center">

        </div>
    </header>
</template>

<style scoped>
    *{
        transition: all 0.5s ease-in-out;
    }
    header{
        background-color: #000;
        height: 75px;
        
    }
    .header-wrapper{
        max-width: 1440px;
        padding: 8px 118px;
        margin: auto;
    }
    .home-link{
        font-family: 'Swis721CnBTRusbyme-Roman';
        font-weight: 700;
        font-size: 36px;
        line-height: 160%;
        color: rgba(255, 252, 251, 1);
    }
    .header-button{
        width: 20px;
        height: 20px;
    }
    @media (max-width: 1024px) {
        header{
            height: 56px;
        }
        .home-link{
            font-size: 26px;
        }
        .header-wrapper{
            padding: 8px 40px;
        }
    }
    @media (max-width: 768px) {
        .header-wrapper{
            max-width: 1440px;
        }
    }
    @media (max-width: 640px) {
        .header-wrapper{
            padding: 7px 15px;
        }
    }
</style>