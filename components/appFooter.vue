<script setup>
    import { reactive } from 'vue';

const links = reactive([
  { url: '/#', text: 'Политика конфиденциальности' },
  { url: '/#', text: 'Правила оплаты и возврата' },
  { url: '/#', text: 'Доставка' }
]);

</script>

<template>
    <footer>
        <div class="footer-wrapper d-flex flex-row justify-space-around align-center pa-6">
            <v-responsive max-width="424" class="search-box-container">
                <v-text-field class="search-box"
                clearable label="Поиск" 
                variant="underlined"
                append-inner-icon="mdi-magnify"
                base-color="rgba(23, 7, 7, 1)"
                color="rgba(23, 7, 7, 1)"
                >
                </v-text-field>
            </v-responsive>

            <div class="link-container">
                <ul class="d-flex flex-column ga-3">
                    <li v-for="(link, index) in links" :key="index" class="footer-link">
                        <NuxtLink  :to="link.url">{{ link.text }}</NuxtLink >
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer-wrapper{
        max-width: 1440px;
        margin: auto;
    }
    .search-box input{
        color: rgba(23, 7, 7, 1) !important;

    }
    :global(.v-field__append-inner){
        margin-right: 22px !important;
    }
    :global(.v-text-field input){
        margin-left: 22px !important;
        color: rgba(23, 7, 7, 1) !important;
    }
    :global(.v-label.v-field-label){
        margin-left: 22px !important; 
    }
    footer{
        font-family: 'Manrope';
        font-weight: 400;
        font-size: 18px;
        letter-spacing: -0.02rem;
        line-height: 120%;
        color: rgba(23, 7, 7, 1);
        background-color: rgba(216, 216, 216, 1);
         
    }
</style>