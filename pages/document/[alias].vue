<script setup>
    import { getDocument } from '~/composables/getDocument';
    import { useRoute } from 'vue-router';
    import { onMounted } from 'vue';
    import { useModal } from '../stores/modal';

    const modalStore = useModal();

    const route = useRoute();
    
    const openModal = () =>{
        modalStore.openInfoFeedBack();
    }
    const choiceDocument = (alias) => {
        switch (alias) {
            case 'obmen-i-vozvrat':
            return 34;
            case 'dostavka':
            return 35;
            case 'oplata':
            return 36;
            case 'politika-konfedenczialnosti':
            return 37;
            case 'pravila-provedeniya-konkursa':
            return 38;
            default:
            return null;
        }
        };
    const document = ref()
    document.value = await getDocument(choiceDocument(route.params.alias))
    onMounted(async() => {

    })
    useHead({
        title: document.longtitle,
        meta: [
            { name: 'description', content: document.description }
        ],
        htmlAttrs: {
            lang: 'ru'
        },

    })
</script>


<template lang="html">
    <InfoFeedBackModal/>
  <AppHeaderSmall/>
  <section class="document">
    <h1 class="document__title">{{ document?.pagetitle }}</h1>
    <p class="document__content">{{ document?.content }}</p>
  </section>
  <AppFooter/>
</template>


<style scoped lang="scss">
    .document{
        max-width: 1440px;
        padding: 20px 44px;
        margin: 0 auto;

    }
    .document__title{
        font-size: 64px;
        line-height: 120%;
        margin-bottom: 40px;
        font-weight: 700;
    }
    .document__content{
        font-size: 16px;
        font-family: Manrope;
    }
    @media (max-width: 680px) {
        .document__title{
            font-size: 48px;
        }
        .document__content{
            font-size: 14px;
        }
        .document{
            padding: 20px 15px;
        }
    }
</style>