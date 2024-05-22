<script setup>

</script>

<template>
  <AppHeaderSmall/>
  <CardModal/>
  <InfoFeedBackModal/>
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
  <AppFooter/>
</template>
  
<style scoped lang="scss">
  *{
    transition: all 0.5s ease-in-out;
  }
  .bloger-container{
    display: flex;
    flex-direction: row;
    gap:4px;
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
  }
  @media (max-width: 640px) {
    .wrapper-container{
      padding: 40px 15px 0 15px;
      margin-bottom: 130px;
    }
  }

</style>

