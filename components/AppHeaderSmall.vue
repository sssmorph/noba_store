<script setup>
    const cartStore = useModal();
    const openCart = () =>{
        cartStore.openCartModal()
    }

</script>


<template>
    <header class="">
        <div class="header-wrapper d-flex flex-row justify-space-between align-center">
            <nuxt-link to="/" class="home-link">Другие коллекции</nuxt-link>
            <v-btn  
            variant="flat"
            size="34"
            color="rgba(255, 252, 251, 1)"
            base-color="rgba(255, 252, 251, 1)"
            rounded="0"
            @click="openCart">
                <img src="/assets/image/to-basket-black.svg" alt="" class="header-button"/>
              </v-btn>
        </div>
    </header>
</template>

<style scoped>
    *{
        transition: all 0.5s ease-in-out;
    }
    header{
        background-color: rgba(221, 58, 26, 1);
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
    }
    @media (max-width: 768px) {
        .header-wrapper{
            max-width: 1440px;
            padding: 7px 15px;
        }
    }
</style>