<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import { ref } from 'vue';
    import 'swiper/css/free-mode';
    import 'swiper/css/thumbs';
    import { getPortfolio } from '~/composables/getPortfolio';
    const modules = ref([Autoplay, Pagination, Navigation]);
    const recomendationPrev = ref(null);
    const recomendationNext = ref(null);

    const portfolio = ref();
    const portfolioData = await getPortfolio();
    portfolio.value = portfolioData.results;    
    
    onMounted( async () => {


    })
    useHead({
        title: 'Портфолио'
    })
</script>

<template>
    <InfoHeader/>
    <InfoFeedBackModal/>
    <section class="wrapper portfolio-block"
    v-for="(item, index) in portfolio" :key="index">
        <h2 class="portfolio-title t-b swis">{{ item.pagetitle }}</h2>

        <Swiper
        class="portfolio-card-container"
        :loop="true"
        :slidesPerView="2"
        :freeMode="true"
        :navigation="{
            nextEl: '.cardNext',
            prevEl: '.cardPrev',
        }"
        :modules="modules"
        :breakpoints="{
            '100':{
                slidesPerView: 1,
            },
            '680':{
                slidesPerView: 2,
            }

        }"
        >
            <swiper-slide 
            v-for="(project, projectIndex) in item.projects" :key="projectIndex"
            class="portfolio-card-item">
                <NuxtLink :to="{ name: 'work-work', params: { work: project.alias }, query: { id: project.id} }">
                    <NuxtImg format="webp" :src="'http://api.noba.store/' + project.image" alt="" class="portfolio-card-item__photo"/>
                    <div class="portfolio-card-item__bottom">
                        <p class="t-b swis portfolio-card__name">{{ project.pagetitle }}</p>
                        <p class="t-b manrope portfolio-card__count">{{ projectIndex  }}</p>
                    </div>
                    <button
                    class="more-work-button more-work-button__item"
                    >
                        <span class="button__text t-w swis">ПОДРОБНЕЕ</span>
                        <span class="button__line more-work"></span>
                    </button>
                </NuxtLink>

            </swiper-slide>

            <div class="card-navigation-container prevContainer">
                <v-btn
                ref="cardPrev"
                variant="flat"
                color="rgba(23, 7, 7, 1)"
                size="34"
                rounded="0"
                class="recomendationPrev cardPrev"
        
                >
                  <img  src="/assets/image/white-arrow.svg" alt="" class="prev-button" style="pointer-events:none;"/>
                </v-btn>
            </div>
            <div class="card-navigation-container nextContainer">
                <v-btn
                ref="cardNext"
                variant="flat"
                color="rgba(23, 7, 7, 1)"
                size="34"
                rounded="0"
                class="recomendationNext cardNext"
                >
                  <img  src="/assets/image/white-arrow.svg" alt="" style="pointer-events:none;"/>
                </v-btn>
            </div>
        </Swiper>
        <div class="background-container">
            <div class="card-bg-gray background-container__item"></div>
            <div class="card-bg-red background-container__item-last"></div>
        </div>
    </section>
    <InfoFooter/>
</template>

<style lang="scss" scoped>
.portfolio-card-container{
    :global(.swiper-button-prev){
        width: 34px;
        height: 34px;
        background-image: url(/assets/image/arrow-prev.svg);
        rotate: 360deg;
      }
      :global(.swiper-button-prev::after){
        width: 34px;
        height: 34px;
        content: none;
  
      }
      :global(.swiper-button-next){
        width: 34px;
        height: 34px;
        background-image: url(/assets/image/arrow-next.svg);
        rotate: 360deg;
        right: 10px !important;
      }
      :global(.swiper-button-next::after){
        width: 34px;
        height: 34px;
        content: none;
      }
  }
    .button__line{
        border-left: dashed 1px rgba(255, 252, 251, 1);
        height: 40px;
        width: 1px;
        margin-left: 55px;
        margin-right: 12px;
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
        z-index: 5;
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
        z-index: 5;
        background-color: rgba(221, 58, 26, 1);
        width: 217px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .portfolio-card-container{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;
        width: 1074px;

        border-bottom: 1px dashed rgba(23, 7, 7, 1);
        margin-right: 0 !important;
        overflow: hidden;
    }

    .portfolio-card-item{
        max-width: 451px;
        padding-top:50px;
        width: 451px;
        height: calc(100% - 50px);
    }
    .portfolio-card-item__small{
        max-width: 173px;
        padding-top:50px;
    }
    .portfolio-card-item__photo{
        width:451px;
        height: 573px;
        object-fit: cover;
    }
    .portfolio-card-item__bottom{
        padding: 18px 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 105px;
        width: 402px;
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
    .background-container{
        position: absolute;
        right: 0;
        height: 100%;
        width: auto;
        display: flex;
        flex-direction: row;
    }
    .background-container__item{
        width: 451px;
        height: 100%;
    }
    .background-container__item-last{
        width: 173px;
        height: 100%;
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
    .card-navigation-container{
        position: absolute;
        bottom: 50%;
        right: 0;
        z-index: 100;
      }
      .cardPrev{
        rotate: 180deg;
      }
      .prevContainer{
        left: 10px;
      }
      .nextContainer{
        right: 10px;
      }
      .more-work-button__item{
        left: auto;
        right: -65px;
        bottom: -130px;
        transition: 0.2s ease-in-out all;
        overflow: hidden;
      }
      .portfolio-card-item:hover{
        transition: 0.2s ease-in-out all;
        .more-work-button__item{
            bottom: 88.5px
        }
      }
    @media (max-width: 1400px) {
        .portfolio-card-item__small{
            display: none;
        }
        .portfolio-card-item{
            max-width: 400px;
        }
        .portfolio-card-container{
            width: 902px;
        }
        .portfolio-card-item__bottom{
            width: 400px;
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
            max-width: 450px;
        }
        .portfolio-card-item__bottom{
            gap: 28px;
            justify-content: flex-start;
            padding: 16px 20px 39px;
            max-width: 450px;
            width: 100%;
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