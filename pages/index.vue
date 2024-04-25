<script setup>

</script>

<template>
  <AppHeaderSmall/>
  <!-- <AppOrder/> -->
  <section class="wrapper-container">
      <span class="background-text">BE REAL</span>
      <img src="../assets/image/heart.svg" class="background-image">


    <div class="bloger-container d-flex flex-row flex-wrap">
      <NuxtLink to="/catalog" class="bloger-card">
        <img src="/assets/image/bloger.png" class="bloger-card__photo">
        <div class="bloger-card__description d-flex flex-row justify-space-between align-start">
          <img src="/assets/image/youtube.svg" alt="" class="description__social-media">

          <div class="d-flex flex-column">
            <div class="description__header-container d-flex flex-row align-center justify-space-between">
              <span class="description__title">Максим Иванов</span>
              <span class="description__subscribers">275К</span>
            </div>
            <div>
              <p class="description__text">Путешественник, настоящий мастер слова и виртуоз в креативном написании... </p>
              <div class="description-text__border"></div>
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/catalog" class="bloger-card">
        <img src="/assets/image/bloger.png" class="bloger-card__photo">
        <div class="bloger-card__description d-flex flex-row justify-space-between align-start">
          <img src="/assets/image/youtube.svg" alt="" class="description__social-media">

          <div class="d-flex flex-column">
            <div class="description__header-container d-flex flex-row align-center justify-space-between">
              <span class="description__title">Максим Иванов</span>
              <span class="description__subscribers">275К</span>
            </div>
            <div>
              <p class="description__text">Путешественник, настоящий мастер слова и виртуоз в креативном написании... </p>
              <div class="description-text__border"></div>
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/catalog" class="bloger-card">
        <img src="/assets/image/bloger.png" class="bloger-card__photo">
        <div class="bloger-card__description d-flex flex-row justify-space-between align-start">
          <img src="/assets/image/youtube.svg" alt="" class="description__social-media">

          <div class="d-flex flex-column">
            <div class="description__header-container d-flex flex-row align-center justify-space-between">
              <span class="description__title">Максим Иванов</span>
              <span class="description__subscribers">275К</span>
            </div>
            <div>
              <p class="description__text">Путешественник, настоящий мастер слова и виртуоз в креативном написании... </p>
              <div class="description-text__border"></div>
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/catalog" class="bloger-card">
        <img src="/assets/image/bloger.png" class="bloger-card__photo">
        <div class="bloger-card__description d-flex flex-row justify-space-between align-start">
          <img src="/assets/image/youtube.svg" alt="" class="description__social-media">

          <div class="d-flex flex-column">
            <div class="description__header-container d-flex flex-row align-center justify-space-between">
              <span class="description__title">Максим Иванов</span>
              <span class="description__subscribers">275К</span>
            </div>
            <div>
              <p class="description__text">Путешественник, настоящий мастер слова и виртуоз в креативном написании... </p>
              <div class="description-text__border"></div>
            </div>
          </div>
        </div>
      </NuxtLink>

    </div>
  </section>
</template>
  
<style scoped lang="scss">
  .bloger-container{
    display: flex;
    flex-direction: row;
    gap:4px;
  }
  .bloger-card{
    z-index: 2;
    position:relative;
    flex: 0 0 calc(33.33% - 8px);
  }
  .bloger-card__photo{
    width: 438px;
    height: 246px;
    filter: grayscale(100%);
    transform: translateX(37.5px);
    transform-origin: left bottom;
    object-fit: cover;
    transition: all 0.5s ease;
    margin-top: auto;
  }
  .bloger-card:hover {
    .bloger-card__photo{
      filter: none;
      width:550px !important;
      height: 350px !important;
    }
  }

  .bloger-card__description{
    background-color: rgba(23, 7, 7, 1);
    padding: 4px 25px 13px 15px;
    color: rgba(255, 252, 251, 1);
    width: 292px;
    height: 108px;
    position:absolute;
    bottom: 10px;
    
  }
  .description__social-media{
    max-width: 25px;
    margin-top: 10px;
  }
  .description__title{
    font-family: Swis721CnBTRusbyme-Roman;
    font-size: 24px;
    font-weight: 700;
    line-height: 38.4px;
    letter-spacing: -0.02em;
    text-align: left;
  }
  .description__subscribers{
    font-family: Swis721CnBTRusbyme-Roman;
    font-size: 14px;
    font-weight: 700;
    line-height: 22.4px;
    letter-spacing: -0.02em;
    text-align: left;
  }
  .description__text{
    font-family: Manrope;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
    letter-spacing: 0.02em;
    text-align: left;
    max-width: 210px;
    height: 51px;
  }
  .description-text__border{
    width: 122px;
    border-bottom: 1px solid rgba(221, 58, 26, 1);
    margin-left: 74px;
  }
  .wrapper-container{
    max-width: 1440px;
    padding: 170px 40px 0 40px;
    margin:auto;
    position: relative;
    margin-bottom: 100px;
  }
  .background-text{
    font-family: 'Swis721CnBTRusbyme-Roman';
    font-size: 160px;
    font-weight: 700;
    line-height: 160%;
    color: rgba(216, 216, 216, 1);
    position: absolute;
    top: -18px;
    right: 0;
    pointer-events: none;
  }
  .background-image{
    position: absolute;
    bottom: 0;
    right: 0;
    pointer-events: none;
  }
</style>

