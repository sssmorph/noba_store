<script setup>

</script>

<template>
  <AppHeaderSmall/>
  <CardModal/>
  <InfoFeedBackModal/>
  <section class="wrapper noba-media-start">
    <span class="text-noba t-w swis">NOBA</span>
    <v-btn
    class="media-start"
    variant="flat"
    rounded="0"
    width="900"
    height="130"
    color="rgba(221, 58, 26, 1)"
    >
      <span class="swis t-w media-start-text">MEDIA START</span>
    </v-btn>

  </section>
  <div class="run_line">
    <hr class="horizon_line_red">
    <NuxtMarquee 
    autoFill='True'
    speed="300"
    class='marquee' style='overflow:hidden'>
      <h2 class="texst_like_h1 run_line_text mr-3 t-r swis" >КОЛЛЕКЦИИ УЧАСТНИКОВ <span class="italik_text">КОЛЛЕКЦИИ УЧАСТНИКОВ</span> КОЛЛЕКЦИИ УЧАСТНИКОВ <span class="italik_text">КОЛЛЕКЦИИ УЧАСТНИКОВ</span></h2>
    </NuxtMarquee>
    <hr class="horizon_line_red">
  </div>
  <section class="wrapper-container">
      <span class="background-text">BE REAL</span>
      <img src="../assets/image/heart.svg" class="background-image">
      
    <div class="bloger-container d-flex flex-row flex-wrap">
      <CollectionBlogerCard/>
      <CollectionBlogerCard/>
      <CollectionBlogerCard/>
      <CollectionBlogerCard/>
      <CollectionBlogerCard/>
      <CollectionBlogerCard/>
      <CollectionBlogerCard/>
      <CollectionBlogerCard/>
    </div>
  </section>
  <section class="noba-factory wrapper">
    <v-btn
    class="factory"
    variant="flat"
    rounded="0"
    width="1300"
    height="130"
    color="rgba(221, 58, 26, 1)"
    >
    <span class="swis t-w factory-text">ШВЕЙНОЕ ПРОИЗВОДСТВО</span>
  </v-btn>
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
  .noba-media-start{
    background-image: url(/assets/image/store-background.jpg);
    background-size: cover;
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
  }
  .factory{
    position: absolute;
    bottom: 250px;
    left: 0;
    padding: 0 50px;
  }
  .media-start-text{
    font-size: 104px;
    font-weight: 700;
    letter-spacing: 1rem;
    line-height: 85%;
  }

  .wrapper{
    max-width: 1440px;

    margin: auto;
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
  .horizon_line_red{
    border: 1px solid #DD3A1A;
  }
  .run_line{
    position: relative;
    bottom: 114px;
    width: 100%
  }
  .factory-text{
    font-size: 104px;
    font-weight: 700;
    line-height: 85%;
  }
  .noba-factory{
    background-image: url(/assets/image/tkan-background.jpg);
    background-size: cover;
    position: relative;
    height: 1440px;
  }
  @media (max-width: 1300px) {
    .factory{
      width: 1050px !important;
    }
    .factory-text{
      font-size: 85px;
    }
  }
  @media (max-width: 1200px) {
    .noba-factory{
      height: 1024px;
    }
    .noba-media-start{
      height: 1024px;
    }
  }
  @media (max-width: 1024px) {
    .background-text{
      font-size: 120px;
      font-weight: 700;
      line-height: 160%;
    }
    .wrapper-container{
      padding: 120px 40px 0 40px;
      margin-bottom: 60px;
    }
    .noba-factory{
      height: 860px;
    }
    .noba-media-start{
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
      letter-spacing: 0.6rem;
    }
    .factory{
      width: 750px !important;
      height: 110px !important;
    }
    .factory-text{
      font-size: 56px;
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
      margin-bottom: 130px;
    }
    .background-image{
      width: 334px;
      height: 111px;
      transform: translateY(100px);
    }
    .factory-text{
      text-wrap: wrap;
      text-align: left;
    }
    .factory{
      height: 150px !important;
      width: 490px !important;
    }

  }
  @media (max-width: 640px) {
    .wrapper-container{
      padding: 40px 15px 0 15px;
      margin-bottom: 130px;
    }
    .noba-factory{
      height: 430px;
    }
    .noba-media-start{
      height: 430px;

    }
    .text-noba{
      font-size: 72px;
      top: 0;
    }
    .media-start{
      width: 300px !important;
      height: 75px !important;
      bottom: 100px
    }

    .media-start-text{
      font-size: 36px;
      letter-spacing: 0;
    }
    .factory{
      bottom: 100px;
      width: 410px !important;
    }
    .factory-text{
      font-size: 44px;
    }
}
@media (max-width: 430px) {
  .factory{
    width: 360px !important;
    height: 120px !important;
  }
  .factory-text{
    font-size: 36px;
  }
}


</style>

