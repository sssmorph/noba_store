<template>
  <AppHeaderSmall/>
  <section class="wrapper-container">
      <span class="background-text">BE REAL</span>
      <img src="../assets/image/heart.svg" class="background-image">
  </section>
</template>
  
<style scoped>
  .wrapper-container{
    max-width: 1440px;
    padding: 60px 40px 0 40px;
    margin:auto;
    position: relative;
    height: 1000px;
    margin-bottom: 100px;
  }
  .background-text{
    font-family: 'Swis721CnBTRusbyme-Roman';
    font-size: 160px;
    font-weight: 700;
    line-height: 160%;
    color: rgba(216, 216, 216, 1);
    position: absolute;
    top: 0;
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

