<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import { ref } from 'vue';
    import 'swiper/css/free-mode';
    import 'swiper/css/thumbs';
    import { useRoute } from 'vue-router';
    import { getProjectById } from '~/composables/getProjectById';

    const route = useRoute()
    const slider = ref()
    const project = ref()
    // const projects = await getProjects();
    // const projectId = projects.find(project => project.alias === route.params.workCard)?.id;
    const projectData = await getProjectById(route.query.id);
    project.value = projectData;
    slider.value = projectData['migx.slider']    

    const modules = ref([Autoplay, Pagination, Navigation]);
    const modalStore = useModal();
    const cardPrev = ref(null);
    const cardNext = ref(null);

    const openModal = () => {
        modalStore.openInfoFeedBack();
    }

    useHead({
        
    })
</script>

<template>
    <InfoFeedBackModal/>
    <InfoHeader/>
    <section class="wrapper portfolio-block">
        <img src="/assets/image/CardClothes.png" class="portfolio-image" alt=""/>
        <img src="/assets/image/bereal-inf-port.svg" alt="" class="be-real-portfolio"/>
            <button
            class="more-work-button"
            @click="openModal"
            >
                <span class="button__text t-w swis">ХОЧУ ТАКЖЕ</span>
                <span class="button__line more-work"></span>
            </button>
        <Swiper class="portfolio-card-container"
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
            <swiper-slide class="portfolio-card-item" 
                v-for="(image, index) in slider"
                :key="index"
            >
                <NuxtImg format="webp" :src="'http://api.noba.store/' + image.image" alt="" class="portfolio-card-item__photo"/>
                <div class="portfolio-card-item__bottom">
                    <p class="t-b manrope portfolio-card__count">{{ index +1 }}</p>
                </div>
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
    </section>
    <section class="review-section">
        <div class="wrapper review-block">
            <div class="review-block__left">
                <img src="/assets/image/review-bereal.png" alt="" class="review-be-real__small"/>
                <img src="/assets/image/review-bereal-b.png" alt="" class="review-be-real__big"/>
                <button
                class="send-request"
                @click="openModal"
                >
                    <span class="button__text t-w swis">ОСТАВИТЬ ЗАЯВКУ</span>
                    <span class="button__line send-request-line"></span>
                </button>                
                <h2 class="t-w swis review-title">{{ project.partner.pagetitle }}</h2>
                <img src="/assets/image/partner-dots.svg" alt="">
                <div v-html="project.partner.content" class="t-w manrope review-text"></div>
            </div>
            <div class="review-block__right">
                <div class="right-content">
                    <div class="right-content__border-line"></div>
                    <div class="content review-right-text" v-html="project.content"></div>
                </div>
            </div>
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
  .content > h3{
    color: rgba(23, 7, 7, 1);
    font-family: Swis721CnBTRusbyme-Roman;
    font-weight: 400;
    font-size: 32px ;
    line-height: 120%;
    margin-bottom: 12px;
    }

    .content > p{
        color: rgba(23, 7, 7, 1);
        font-family: manrope;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
    }
    p{
        color: rgba(23, 7, 7, 1);
        font-family: Manrope !important;
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
    }
    h3{
        color: rgba(23, 7, 7, 1);
        font-family: Swis721CnBTRusbyme-Roman;
        font-weight: 400;
        font-size: 32px ;
        line-height: 120%;
        margin-bottom: 12px;
    }
.button__line{
    border-left: dashed 1px rgba(255, 252, 251, 1);
    height: 40px;
    width: 1px;
    margin-left: 46px;
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
.portfolio-image{
    max-width: 386px;
    padding-top: 126px;
    position: absolute;
    left: 30px;
    z-index: 4;
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
    padding: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 217px;
    height: 40px;
    background-color: rgba(221, 58, 26, 1);
}
.portfolio-card-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
    height: 100%;
    width: 1074px;
    margin-right: 0 !important;

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
    justify-content: flex-end;
    height: 105px;
    width: 402px;

}
.portfolio-card-item__bottom__mobile{
    padding: 25px 10px 18px 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
.review-block{
    height: 970px;
    padding: 0;
    display: flex;
}
.review-block__left{
    max-width: 623px;
    padding: 0 44px;
    padding-top: 82px;
    position: relative;
    background-color:rgba(23, 7, 7, 1);
    height: 100%;
}
.review-title{
    font-weight: 700;
    font-size: 64px;
    line-height: 120%;
    margin-bottom: 70px;
}
.review-text{
    margin-top: 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: 0.02rem;
}
.review-be-real__small{
    position: absolute;
    right: 0;
    top: 150px;
}
.review-be-real__big{
    position: absolute;
    left:0;
    bottom: 75px;
}
.send-request{
    rotate: 270deg;
    position: absolute;
    bottom:88.5px;
    right: -24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 217px;
    height: 40px;
    background-color: rgba(221, 58, 26, 1);
}
.review-block__right{
    padding: 84px 44px 0 64px;
    width: 100%;
    
}
.right-content{
    border-left: rgba(23, 7, 7, 1) 1px dashed;
    width: 100%;
    padding: 22px 0 4px 62px;
    display: flex;
    flex-direction: column;
    gap:32px;
    position: relative;
}
.review-right-title{
    font-weight: 400;
    font-size: 32px;
    line-height: 120%;
    margin-bottom: 12px;
}
.review-right-text{
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
}
.right-content__border-line{
    width:2px;
    height: 163px;
    background-color: rgba(221, 58, 26, 1);
    position: absolute;
    top:0;
    left: -1px;
}
.send-request-line{
    margin-left: 28px;
    margin-right: 12px;
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
@media (max-width: 1400px) {
    .right-content{
        padding-left: 26px;
    }
    .review-block__right{
        padding-left:32px;
    }
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
@media (max-width: 1300px) {
    .review-block__left{
        padding-right: 24px;
        padding-top: 42px;
    }
    .review-block__right{
        padding-top: 44px;
    }
    .right-content{
        gap: 20px;
    }
}
@media (max-width: 1200px) {
    .review-block{
        flex-direction: column;
        height: auto;
    }
    .review-block__right{
        padding-bottom: 56px;
        padding-left: 44px;
    }
    .review-block__left{
        max-width: 100%;
        width: 100%;
        height: 839px;
        padding-top: 56px;
    }
    .review-be-real__small{
        top: 117px;
        width: 233px;
        height: 53px;
    }
    .review-be-real__big{
        bottom: 57px;
        width: 306px;
        height: 70px;
    }
    .review-title{
        margin-bottom: 36px;
    }
    .portfolio-block{
        height: 910px;
    }
    .portfolio-card-item{
        padding-top:208px;
    }
    .portfolio-image{
        padding-top: 0px;
        margin-top:56px;
        max-width: 377px;
        width: 100%;
        max-height: 114px;

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
    .portfolio-card-container{
        padding-left: 0;
    }
}
    @media (max-width: 680px) {

        .review-text{
            font-size: 14px;
        }

        .send-request{
            right: -69px;
        }
        .review-title{
            font-size: 48px;
        }

        .right-content{
            padding-top: 7px;
            padding-bottom: 8px;
            gap: 16px;
        }
        .review-right-title{
            font-size: 26px;
        }
        .review-right-text{
            font-size: 14px;
        }
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
        }
        .portfolio-card__name{
            font-size: 16px;
        }
        .portfolio-card__count{
            font-size:14px;
        }
    }
    @media (max-width: 640px) {
        .portfolio-image{
            left: 20px;
        }
        .review-block__right{
            padding-top: 56px;
            padding-left: 20px;
            padding-right: 20px;
        }
        .review-block__left{
            padding-right: 20px;
        }
    }
    @media (max-width: 400px) {
        .review-block__left{
            padding-left: 20px;
            padding-top: 30px;
        }
        .review-text{
            margin-top: 20px;
        }
    }
</style>