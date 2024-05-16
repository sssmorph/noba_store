<script setup>

</script>

<template>
    <InfoHeader/>
    <section class="wrapper portfolio-block">
        <h2 class="portfolio-title t-b swis">Повседневная одежда</h2>
        <NuxtLink to="workCard">
            <v-btn
            variant="flat"
            color="rgba(221, 58, 26, 1)"
            width="217"
            height="40"
            rounded="0"
            class="more-work-button"
            >
                <span class="button__text t-w swis">ПОДРОБНЕЕ</span>
                <span class="button__line more-work"></span>
            </v-btn>
        </NuxtLink>
        <div class="portfolio-card-container">
            <div class="portfolio-card-item">
                <img src="/assets/image/portfolio1.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
            <div class="portfolio-card-item card-bg-gray">
                <img src="/assets/image/portfolio2.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
            <div class="portfolio-card-item__small card-bg-red">
                <img src="/assets/image/portfolio3.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom__mobile">
                    <p class="t-b swis portfolio-card__name__mobile">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
        </div>
    </section>
    <section class="wrapper portfolio-block">
        <h2 class="portfolio-title t-b swis">Мерч</h2>
        <NuxtLink to="workCard">
            <v-btn
            variant="flat"
            color="rgba(221, 58, 26, 1)"
            width="217"
            height="40"
            rounded="0"
            class="more-work-button"
            >
                <span class="button__text t-w swis">ПОДРОБНЕЕ</span>
                <span class="button__line more-work"></span>
            </v-btn>
        </NuxtLink>
        <div class="portfolio-card-container">
            <div class="portfolio-card-item">
                <img src="/assets/image/portfolio1.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
            <div class="portfolio-card-item card-bg-gray">
                <img src="/assets/image/portfolio2.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
            <div class="portfolio-card-item__small card-bg-red">
                <img src="/assets/image/portfolio3.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom__mobile">
                    <p class="t-b swis portfolio-card__name__mobile">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
        </div>
    </section>
    <section class="wrapper portfolio-block">
        <h2 class="portfolio-title t-b swis">Спортивная одежда</h2>
        <NuxtLink to="workCard">
            <v-btn
            variant="flat"
            color="rgba(221, 58, 26, 1)"
            width="217"
            height="40"
            rounded="0"
            class="more-work-button"
            >
                <span class="button__text t-w swis">ПОДРОБНЕЕ</span>
                <span class="button__line more-work"></span>
            </v-btn>
        </NuxtLink>
        <div class="portfolio-card-container border-0">
            <div class="portfolio-card-item">
                <img src="/assets/image/portfolio1.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
            <div class="portfolio-card-item card-bg-gray">
                <img src="/assets/image/portfolio2.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
            <div class="portfolio-card-item__small card-bg-red">
                <img src="/assets/image/portfolio3.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom__mobile">
                    <p class="t-b swis portfolio-card__name__mobile">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
        </div>
    </section>
    <InfoFooter/>
</template>

<style lang="scss" scoped>
    .button__line{
        border-left: dashed 1px rgba(255, 252, 251, 1);
        height: 40px;
        width: 1px;
        margin-left: 55px;
    }
    .button__text{
        font-size: 18px;
        font-weight: 400;
        line-height: 120%;
    }
    h2{
        text-transform: none;
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
    .wrapper{
        max-width: 1440px;
        width: 100%;
        padding: 0 44px;
        margin-left:  auto;
        margin-right: auto;
    }
    
    .portfolio-block{
        height: 764px;
        position: relative;
        display: flex;
        justify-content: flex-end;
        padding-right: 0;
    }   
    .portfolio-title{
        max-width: 386px;
        font-weight: 700;
        font-size: 64px;
        line-height: 120%;
        padding-top: 126px;
        position: absolute;
        left: 44px;
    }
    .be-real-portfolio{
        position: absolute;
        bottom: 23px;
        left: 0;
    }
    .more-work-button{
        rotate: 270deg;
        position: absolute;
        bottom:88.5px;
        left: 182px;
    }
    .portfolio-card-container{
        display: flex;
        justify-content: flex-end;
        height: 100%;
        padding-left: 129px;
        border-bottom: 1px dashed rgba(23, 7, 7, 1);
    }

    .portfolio-card-item{
        max-width: 451px;
        padding-top:50px;
    }
    .portfolio-card-item__small{
        max-width: 173px;
        padding-top:50px;
    }
    .portfolio-card-item__photo{
        width:100%;
        height: 573px;
    }
    .portfolio-card-item__bottom{
        padding: 18px 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 141px;
    }
    .portfolio-card-item__bottom__mobile{
        padding: 25px 10px 18px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 141px;
    }
    .portfolio-card__name{
        font-weight: 400;
        font-size:18px;
        line-height: 120%;
    }
    .portfolio-card__count{
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
    }
    .card-bg-gray{
        background-color: rgba(216, 216, 216, 1);
    }
    .card-bg-red{
        background-color:rgba(221, 58, 26, 1);
    }    
    .portfolio-card__name__mobile{
        font-weight: 400;
        line-height: 120%;
        font-size: 12px;
    }
    .more-work-button{
        padding: 0;
        left: 45%;
    }
    @media (max-width: 1400px) {
        .portfolio-card-item__small{
            display: none;
        }
        .portfolio-card-item{
            max-width: 400px;
        }
    }
    @media (max-width: 1200px) {
        .portfolio-block{
            height: 910px;
        }
        .portfolio-card-item{
            padding-top:208px;
        }
        .portfolio-title{
            padding-top: 56px;
            max-width: 100%;
        }
        .more-work-button{
            right: -69px;
            left: auto;
        }
        .portfolio-card-item__bottom{
            height: 129px;
        }
    }
    @media (max-width: 1024px) {
        .portfolio-block{
            padding-left: 0;
        }
        .be-real-portfolio{
            display: none;
        }
        .portfolio-title{
            left: 20px;
        }
        .portfolio-card-container{
            padding-left: 0;
        }
    }
    @media (max-width: 680px) {
        .portfolio-card-item{
            display: none;
        }
        .portfolio-card-item:nth-child(1){
            display: block;
            max-width: 450px;
        }
        .portfolio-card-item__bottom{
            gap: 28px;
            justify-content: flex-start;
            padding: 16px 20px 39px;
            
        }
        .portfolio-block{
            justify-content: center;
        }
        .portfolio-title{
            font-size: 48px;
            max-width: 370px;
        }
        .portfolio-card__name{
            font-size: 16px;
        }
        .portfolio-card__count{
            font-size:14px;
        }
    }
</style>