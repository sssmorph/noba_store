<script setup>
  import { getBloger } from '../composables/getBlogerById';
  import { useRouter } from 'vue-router';

  const route = useRouter();
  const props = defineProps({
    personId:{
      type: Number,
      required: true
    }
  })
  const personId = ref(props.personId);
  const person = await getBloger(props.personId);
  const blogerImage = 'http://api.noba.store/' + person.cover_img

  const mainSocialMedia = computed(() => {
    
    if (person['migx.social']) {
      const mainSocial = person['migx.social'].find(socialMedia => socialMedia.main.includes('Да'))
      return `http://api.noba.store/img/icons/${mainSocial.social.toLowerCase().trim()}.svg`
    } else{
      return ''
    }

  })
</script>

<template lang="html">
    <NuxtLink :to="{ name: 'alias', params: { alias: person.alias }}" class="bloger-card">
        <NuxtImg format="webp" quality="70" loading="lazy" :src="blogerImage" class="bloger-card__photo" alt="bloger photo"/>
        <div class="bloger-card__description d-flex flex-row justify-space-between align-start">
          <NuxtImg  :src="mainSocialMedia" alt="" class="description__social-media"/>

          <div class="d-flex flex-column">
            <div class="description__header-container d-flex flex-row align-center justify-space-between">
              <span class="description__title">{{person.pagetitle}}</span>
              <span class="description__subscribers">{{ person.quantity }} </span>
            </div>
            <div class="description-container">
              <p class="description__text">{{ person.info }}</p>
              <div class="description-text__border"></div>
            </div>
          </div>
        </div>
      </NuxtLink>
</template>

<style lang="scss" scoped>
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
  @media (hover: hover) {
    .bloger-card:hover {
      position: relative;
      height: 246px;
      z-index: 10;
      .bloger-card__photo{
        transform: translateX(30px);
        filter: none;
        scale: 1.25;
      }
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
    overflow: hidden;
  }
  .description-text__border{
    max-width: 122px;
    border-bottom: 1px solid rgba(221, 58, 26, 1);
    margin-left: 74px;
  }
  @media (max-width: 1200px) {
    @media (hover: hover) {
      .bloger-card:hover {
        height: 246px;
        z-index: 2;
        .bloger-card__photo{
          transform: translateX(37.5px);
          filter: grayscale(100%);
          scale: 1;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .bloger-card{
      flex: 0 0 calc(49% - 4px);
    }
    .bloger-card__description{
      padding: 4px 10px 10px 12px;
      color: rgba(255, 252, 251, 1);
      width: 250px;
      height: 108px;
    }
    .description__title{
      font-size: 22px;
      line-height: 35.2px;
    }
    .description__text{
      font-size: 12px;
      line-height: 16.8px;
      max-width: 210px;
      height: 51px;
    }
    .background-text{
      font-size: 120px;
      font-weight: 700;
      line-height: 160%;
    }
}
@media (max-width: 800px) {
    .bloger-card__description{
      padding: 4px 8px 9px 12px;
      color: rgba(255, 252, 251, 1);
      width: 205px;
      height: 116px;
    }
    .description__title{
      font-size: 18px;
      line-height: 28.8px;
    }
    .description__subscribers{
      font-size: 12px;
      line-height: 19.2px;
    }
    .description__text{
      font-size: 12px;
      line-height: 16.8px;
      max-width: 160px;
      height: 70px;
    }
    .description__social-media{
      max-width: 21px;
      margin-top: 7px;
    }
    .description-container{
      max-width: 160px;
    }
    .description-text__border{
      max-width: 110px;
      border-bottom: 1px solid rgba(221, 58, 26, 1);
      margin-left: 46px;
    }
  }
  @media (max-width: 750px) {
    .bloger-card{
      flex: 0 0 415px;
    }
    .bloger-card__photo{
      transform: translateX(15px);
    }
    @media (hover: hover) {
      .bloger-card:hover {
        height: 246px;
        z-index: 2;
        .bloger-card__photo{
          transform: translateX(15px);
          filter: grayscale(100%);
          scale: 1;
          height: 246px;
        }
      }
    
    }
  }
  @media (max-width: 640px) {
    .bloger-card{
      transform: translateX(-9px)
    }
    .bloger-card__photo{
      width: 400px;
      height: 260px;
    }
    @media (hover: hover) {
      .bloger-card:hover {
        height: 260px;
        .bloger-card__photo{
          height: 260px;
        }
      }
    
    }
  }
  @media (max-width:430px) {
    .bloger-card{
      flex: 0 0 100%;
    }
  }
</style>