<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Главная',
          disabled: false,
          href: '/',
        },
        {
          title: 'Каталог',
          disabled: false,
          href: 'catalog',
        },
        {
          title: 'Свитшот Freedom',
          disabled: true,
          href: 'card'
        }
      ],
    }),
    methods
  }
</script>

<template>
  <AppHeaderBig/>
  <section class="card-page-container">
    <div class="sub-header-container">
      <v-breadcrumbs :items="items"
      divider="|"
      color="rgba(166, 163, 163, 1)">
        <template v-slot:title="{ item }">
          {{ item.title }}
        </template>
      </v-breadcrumbs>
      <div class="sub-header__button-container">
        <NuxtLink to="/" class="other-collection__link">
          <span class="button-text__collection">Другие коллекции</span>
          <img src="/assets/image/shirt.svg">          
        </NuxtLink>
        <v-btn
        variant="flat"
        size="34"
        color="rgba(221, 58, 26, 1)"
        rounded="0"

        >
        <img src="/assets/image/cart-black.svg">
        </v-btn>        
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  .card-page-container{
    max-width: 1440px;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 100px;
  }
  .sub-header-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .sub-header__button-container{
    display: flex;
    flex-direction: row;
    gap: 10px;
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
</style>