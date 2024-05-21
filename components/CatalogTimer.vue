<script setup>
   const targetTime = new Date("2024, 7, 2").getTime();
   const currentTime = ref(new Date().getTime());
   const timeRemaining = ref(targetTime - currentTime.value);
   
   const formatedMinutes = computed(() => {
    const minutes = Math.floor(timeRemaining.value / 60000);
    return minutes;
   })
   const formatedHours = computed(() => {
    const hours = Math.floor(formatedMinutes.value / 60)
    return hours;
   })
   const formatedDays = computed(() => {
     const days = Math.floor(formatedHours.value / 24);
     return days;
   });

   let intervalId;

   onMounted(() => {
     intervalId = setInterval(updateTimer, 1000);
   });
   onBeforeUnmount(() => {
     clearInterval(intervalId);
   });
   function updateTimer() {
     currentTime.value = new Date().getTime();
     timeRemaining.value = Math.max(0, targetTime - currentTime.value);
   }

</script>

<template>
    <div class="timer-container">
        <span class="timer-title">До старта продаж осталось</span>
        <div class="timer d-flex flex-row ">
          <div class="timer__item">
            <div class="timer__box">{{formatedDays}}</div>
            <span class="timer__text">дней</span>
          </div>
          <div class="timer__item">
            <div class="timer__box">{{formatedHours % 24}}</div>
            <span class="timer__text">часов</span>
          </div>
          <div class="timer__item">
            <div class="timer__box timer__box-minute">{{formatedMinutes % 60}}</div>
            <span class="timer__text">минут</span>
          </div>
        </div>
      </div>
</template>


<style lang="scss" scoped>
    
  .timer-container{
    display: flex;
    flex-direction: row;
    gap:40px;
  }
  .timer-title{
    font-family: Swis721CnBTRusbyme-Roman;
    font-weight: 400;
    font-size: 28px;
    line-height: 120%;
    color: rgba(23, 7, 7, 1);
  }
  .timer__text{
    color: rgba(23, 7, 7, 1);
    font-family: Manrope;
    font-size: 12px;
    font-weight: 300;
    line-height: 14.4px;
    text-align: center;

  }
  .timer{
    display: flex;
    flex-direction: row;
    gap:5px;
  }
  .timer__item{
    display: flex;
    flex-direction: column;
    gap: 5px;

  }
  .timer__box{
    width: 34px;
    height: 34px;
    color: rgba(23, 7, 7, 1);
    border: 1.5px solid rgba(221, 58, 26, 1);
    font-family: Swis721CnBTRusbyme-Roman;
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  .timer__box-minute{
    background-color: rgba(221, 58, 26, 1);
    color: rgba(255, 252, 251, 1);
  }

  @media (max-width: 1030px) {
    .timer-container__hidden{
      display: none;
    }
    .timer-container__mobile{
      display: flex;
      margin-top: 25px;
      justify-content: flex-end;
      padding: 0 40px;  
    }
}
@media (max-width: 650px) {
    .timer-container__mobile{
        padding: 0 15px;
        gap: 15px;
      }
      .timer-title{
        font-size: 22px;
        line-height: 120%;
        margin-top: 7px;
      }
}
</style>