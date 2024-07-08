<script setup>
  import { useBloggers } from '../composables/useBloggers';

  const bloggers = await useBloggers();
  useHead({
    title: "Noba Store"
  })
</script>

<template>
  <AppHeaderSmall/>
  <CartModal/>
  <InfoFeedBackModal/>
  <section class="noba-media-container">
    <div class="wrapper noba-media-start">
      <NuxtLink to="konkurs">
        <v-btn
        class="media-start"
        variant="flat"
        rounded="0"
        width="810"
        height="130"
        color="rgba(221, 58, 26, 1)"
        >
          <span class="t-w media-start-text">MEDIA START</span>
        </v-btn>
    </NuxtLink>
    </div>
    <div class="media-start-before"></div>
  </section>
  <div class="run_line">
    <hr class="horizon_line_red">
    <NuxtMarquee 
    autoFill:true
    speed="300"
    class='marquee' style='overflow:hidden'>
      <h2 class="texst_like_h1 run_line_text mr-3 t-r" >КОЛЛЕКЦИИ УЧАСТНИКОВ <span class="italik_text">КОЛЛЕКЦИИ УЧАСТНИКОВ</span> КОЛЛЕКЦИИ УЧАСТНИКОВ <span class="italik_text">КОЛЛЕКЦИИ УЧАСТНИКОВ</span></h2>
    </NuxtMarquee>
    <hr class="horizon_line_red">
  </div>
  <section class="bloger-section">
    <div class="wrapper-container">
      <img src="../assets/image/heart_red.svg" class="background-image">
      <div class="bloger-container d-flex flex-row flex-wrap">
        <CollectionBlogerCard 
        v-for="(blogger, index) in bloggers"
        :key="index"
        :personId="blogger.id"
        />
      </div>
    </div>
  </section>
  
  <section class="noba-factory-container">
    <div class="noba-factory wrapper">
      <NuxtLink to="info">
        <v-btn
        class="factory"
        variant="flat"
        rounded="0"
        width="1360"
        height="130"
        color="rgba(221, 58, 26, 1)"
        >
        <span class="swis t-w factory-text">ШВЕЙНОЕ ПРОИЗВОДСТВО</span>
      </v-btn>
    </NuxtLink>
    </div>
    <div class="factory-before"></div>
  </section>
  <AppFooter/>
</template>
  
<style scoped lang="scss">
@import "/assets/css/index.scss";

  *{
    transition: all 0.5s ease-in-out;
  }
  .swis{
    font-family: Swis721CnBTRusbyme-Roman;
  }
  .manrope{
      font-family: manrope;
  }
  .t-w{
      color: rgba(255, 252, 251, 1)
  }
  .t-b{
      color: rgba(23, 7, 7, 1);
  }
  .t-g{
      color: rgba(216, 216, 216, 1);
  }
  .t-r{
      color: rgba(221, 58, 26, 1);
  }
  .bloger-container{
    display: flex;
    flex-direction: row;
    gap:4px;
  }
  .bloger-section{
    background-color: rgba(1, 1, 1, 1);
    padding-bottom: 100px;
  }
  .noba-media-start{
    position: relative;
    height: 1440px;
    padding: 0 40px;
    z-index: 5;
  }
  .media-start-before{
    position: absolute;
    bottom: 250px;
    height: 130px;
    width: 100vw;
    background-color: rgba(221, 58, 26, 1);
    right: 50%;
    z-index: 0;
  }
  .noba-media-container{
    background-image: url(/assets/image/store-background.jpg);
    background-size: cover;
    background-position: center center;
    width: 100vw !important;
    top: 0;
    right: 0;
    max-width: 100vw;
    position: relative;
    height: 1440px;
  }
  .text-noba{
    font-weight: 800;
    font-size: 240px;
    position: absolute;
    left: 40px;
    top: -30px;
  }
  .media-start{
    position: absolute;
    bottom: 250px;
    left:0;
    padding: 0 50px;
    text-align: left;
  }

  .factory{
    position: absolute;
    bottom: 100px;
    left: 0;
    padding: 0 40px;
  }
  .media-start-text{
    font-size: 88px;
    font-weight: 700;
    line-height: 85%;
    font-family: 'Swis721 Hv Ha'; 
    letter-spacing: -0.02rem;
  }
  .factory-before{
    width: 100vw;
    height: 130px;
    position: absolute;
    bottom: 100px;
    right: 50%;
    background-color: rgba(221, 58, 26, 1);
  }
  .wrapper{
    max-width: 1440px;

    margin: auto;
  }
  .wrapper-container{
    max-width: 1440px;
    padding:65px 40px 0 40px;
    margin:auto;
    position: relative;
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
  .horizon_line_red{
    border: 2px solid #DD3A1A;
  }
  .run_line{
    position: relative;
    bottom: 114px;
    width: 100%
  }
  .factory-text{
    font-size: 88px;
    font-weight: 700;
    line-height: 85%;
    font-family: 'Swis721 Hv Ha'; 
    letter-spacing: -0.02rem;
  }
  .noba-factory{
    background-size: cover;
    position: relative;
    height: 720px;
    padding: 0 40px;
    z-index: 5;
  }
  .noba-factory-container{
    background-image: url(/assets/image/tkan-background.jpg);
    background-size: cover;
    background-position: center center;
    position: relative;
  }
  @media (max-width: 1300px) {
    .factory{
      width: 1050px !important;
    }
    .factory-text{
      font-size: 68px;
    }
  }
  @media (max-width: 1200px) {
    .noba-media-start{
      height: 1024px;
    }
    .noba-media-container{
      height: 1024px;
    }    

  }
  @media (max-width: 1024px) {
    .factory-before{
      display: none;
    }
    .media-start-before{
      display: none;
    }
    .background-text{
      font-size: 120px;
      font-weight: 700;
      line-height: 160%;
    }
    .wrapper-container{
      padding: 120px 40px 0 40px;
    }
    .noba-media-start{
      height: 860px;
    }
    .noba-media-container{
      height: 860px;
    }    
    .text-noba{
      font-size: 160px
    }
    .media-start{
      width: 500px !important;
      height: 110px !important;
    }
    .media-start-text{
      font-size: 56px;
    }
    .factory{
      width: 730px !important;
      height: 110px !important;
    }
    .factory-text{
      font-size: 44px;
    }
}
  @media (max-width: 868px) {
    .run_line{
      bottom: 75px;
    }
  }
  @media (max-width: 750px) {
    .wrapper-container{
      padding: 75px 40px 0 40px;
    }
    .bloger-section{
      padding-bottom: 130px;
    }
    .bloger-container{
      justify-content: center;
    }
    .background-image{
      width: 334px;
      height: 111px;
      transform: translateY(100px);
    }
    .factory-text{
      white-space: normal;
      text-align: left;
      line-height: 105%;
    }
    .factory{
      height: 150px !important;
      width: 490px !important;
    }

  }
  @media (max-width: 640px) {
    .run_line{
      bottom: 48px;
    }
    .run_line_text{
      font-size: 42px;
      line-height: 105%;
    }
    .italik_text{
      font-size: 42px;
      line-height: 105%;
    }
    .wrapper-container{
      padding: 40px 15px 0 15px;
      margin-bottom: 130px;
    }
    .noba-factory{
      height: 430px;
      padding: 0 15px;
    }
    .noba-media-start{
      height: 430px;
      padding: 0 15px;
    }
    .noba-media-container{
      height: 430px;
    }
    .text-noba{
      font-size: 72px;
      top: 0;
      left: 15px
    }
    .media-start{
      width: 300px !important;
      height: 75px !important;
      bottom: 100px;
      padding:0 15px;
    }

    .media-start-text{
      font-size: 36px;
      letter-spacing: 0;
    }
    .factory{
      width: 410px !important;
      height: 100px !important;
    }
    .factory-text{
      font-size: 36px;
    }
}
@media (max-width: 430px) {
  .factory{
    width: 360px !important;
  }
  .factory-text{
    font-size: 36px;
  }
}


</style>

