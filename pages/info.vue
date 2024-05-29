<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import { ref } from 'vue';
    import 'swiper/css/free-mode';
    import 'swiper/css/thumbs';
    const modules = ref([Autoplay, Pagination, Navigation]);
    const cardPrev = ref(null);
    const cardNext = ref(null);
    let burgerIsActive = ref(false);

    const toggleBurger = () =>{
        burgerIsActive.value = !burgerIsActive.value;
        console.log(burgerIsActive.value);
    };

    const modalStore = useModal();
    const openModal = () => {
        modalStore.openInfoFeedBack();
    }

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
    },
    }
</script>

<template>
    <InfoFeedBackModal/>
    <section class="header-section">
        <div class="burger-menu" @click="toggleBurger">
            <span class="line1" :class="{open1: burgerIsActive}"></span>
            <span class="line2" :class="{open2: burgerIsActive}"></span>
          </div>
        <div class="burger-menu-container" :class="{hidden: !burgerIsActive}">
            <div class="burger-menu-border">
                <div class="burger-links">
                    <NuxtLink to="/portfolio" class="header-link swis t-w">Портфолио</NuxtLink>
                    <NuxtLink to="/" class="header-link swis t-w">Интернет-магазин</NuxtLink>
                    <NuxtLink to="/konkurs" class="header-link swis t-w">Конкурс</NuxtLink>
                </div>
                <div class="burger-links">
                    <span class="header-link swis t-w">mvmax1000@yandex.ru</span>
                    <span class="header-link swis t-w">8 (925) 892-75-75</span>
                </div>
            </div>
        </div>
        <div class="wrapper header-block">
            <swiper class="header-slider MySwiper"
            :centeredSlides="true "
            :autoplay="true"
            :pagination="pagination"
            :crossFade="true"
            :modules="modules"
            
            >
                <swiper-slide class="header-slider__item">
                    <img src="/assets/image/info-back1.png" alt="">
                </swiper-slide>
                <swiper-slide class="header-slider__item">
                    <img src="/assets/image/info-back1.png" alt="">
                </swiper-slide>
                <swiper-slide class="header-slider__item">
                    <img src="/assets/image/info-back1.png" alt="">
                </swiper-slide>

            </swiper>

            <nav class="header-navigation">
                <div class="header-contacts">
                    <span class="header-link swis t-w">mvmax1000@yandex.ru</span>
                    <span class="header-link swis t-w">8 (925) 892-75-75</span>
                </div>
                <div class="header-links">
                    <NuxtLink to="/portfolio" class="header-link swis t-w">Портфолио</NuxtLink>
                    <NuxtLink to="/" class="header-link swis t-w">Интернет-магазин</NuxtLink>
                    <NuxtLink to="/konkurs" class="header-link swis t-w">Конкурс</NuxtLink>
                </div>
            </nav>
            <div class="header-text-container">
                <h2 class="header-title swis t-w">Создаём качественную одежду</h2>
                <div class="text-line-container">
                    <p class="header-text manrope t-g">NOBAREY — это новый уровень российского производителя спортивной и стрит одежды. Технологии, опережающие время. Инновационные материалы. Безупречность исполнения и влекущий дизайн.</p>
                    <div class="dotted-line"></div>
                </div>
            </div>
            <div class="header__social-media">
                <a href="" class="social-media__item">
                    <img src="/assets/image/tiktok-info.svg" alt="" class="social-media__image">
                </a>
                <a href="" class="social-media__item">
                    <img src="/assets/image/telegram-info.svg" alt="" class="social-media__image">
                </a>
                <a href="" class="social-media__item">
                    <img src="/assets/image/youtube-info.svg" alt="" class="social-media__image">
                </a>
            </div>
            <v-btn
            variant="flat"
            color="rgba(221, 58, 26, 1)"
            width="200"
            height="40"
            rounded="0"
            class="submit-request-button"
            @click="openModal"
            >
                <span class="button__text t-w swis">ОСТАВИТЬ ЗАЯВКУ</span>
                <span class="button__line"></span>
            </v-btn>
        </div>

    </section>
    
        <section class="wrapper about-us-block">
                <div class="about-us__red-line"></div>
                <div class="about-us-information">
                    <h2 class="about-us-title swis t-b">TM.NOBAREY основана в 2013 году</h2>
                    <p class="about-us-text manrope t-b about-us-margin__top">NOBAREY — это новый уровень российского производителя спортивной и стрит одежды. Технологии, опережающие время. Инновационные материалы. Безупречность исполнения и влекущий дизайн.</p>
                    <p class="about-us-text manrope-t-b about-us-margin__top">NOBAREY — это новый уровень российского производителя спортивной и стрит одежды. Технологии, опережающие время. Инновационные материалы. Безупречность исполнения и влекущий дизайн.</p>
                    <div class="awards-container">
                        <img src="/assets/image/awards.png" alt="" class="award-image">
                        <p class="award-text t-b manrope">Победители в номинации “Лучшее производство одежды” 2021 года.</p>
                    </div>
                    <h2 class="sales-count swis t-r">23652+</h2>
                    <p class="about-us-text manrope t-b">Отшитых предметов одежды за всю историю существования. И это ещё только начало.</p>
                </div>
        </section>
    <section class="our-benefit-section">
        <div class="wrapper our-benefit">
            <img src="/assets/image/be-real-info.png" alt="" class="be-real">
            <div class="our-benefit__title-container">
                <h2 class="our-benefit-title t-w swis">Почему выбирают нас</h2>
                <div class="our-benefit-line"></div>
            </div>
            <div class="benefit-information-container">
                <div class="benefit-information-item">
                    <p class="normal-benefit t-w manrope"><span class="big-benefit t-w swis">Никаких компромиссов.</span> Честные отношения с нашими клиентами и абсолютное качество. Максимальная ответственность перед брендом и клиентам!</p>
                </div>
                <div class="benefit-information-item">
                    <p class="normal-benefit t-w manrope"><span class="t-r big-benefit swis">Собственное производство </span>позволяет выполнять заказы на пошив любой сложности, гарантируя высокое качество исполнения и точное соблюдение сроков.</p>
                </div>
                <div class="benefit-information-item">
                    <p class="normal-benefit t-w manrope">Мы создаём спортивную экипировку из <span class="big-benefit t-w swis">материалов, специально разработанных</span> для активных занятий спортом.</p>
                </div>
                <div class="benefit-information-item">
                    <p class="normal-benefit t-w manrope">Изделия создаются по <span class="big-benefit t-r swis">индивидуальным параметрам </span><span class="big-benefit t-w swis uniq-sportsmen">каждого спортсмена </span>и тренера, для чего производятся замеры по 12 размерным признакам.</p>
                </div>
                <div class="benefit-information-item">
                    <p class="normal-benefit t-w manrope">Даем <span class="big-benefit swis t-w">гарантию</span> на наши изделия.</p>
                </div>
            </div>
        </div> 
    </section>
    <section class="wrapper portfolio-block">
        <h2 class="portfolio-title t-b swis">Наше портфолио</h2>
        <img src="/assets/image/bereal-inf-port.svg" alt="" class="be-real-portfolio">
        <NuxtLink to="portfolio">
            <v-btn
            variant="flat"
            color="rgba(221, 58, 26, 1)"
            width="217"
            height="40"
            rounded="0"
            class="more-work-button"
            >
                <span class="button__text t-w swis">БОЛЬШЕ РАБОТ</span>
                <span class="button__line more-work"></span>
            </v-btn>
        </NuxtLink>
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
            <swiper-slide class="portfolio-card-item">
                <img src="/assets/image/portfolio1.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </swiper-slide>
            <swiper-slide class="portfolio-card-item card-bg-gray">
                <img src="/assets/image/portfolio2.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">02</p>
                </div>
            </swiper-slide>
            <swiper-slide class="portfolio-card-item card-bg-red">
                <img src="/assets/image/portfolio3.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">03</p>
                </div>
            </swiper-slide>
            <swiper-slide class="portfolio-card-item">
                <img src="/assets/image/portfolio1.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </swiper-slide>
            <swiper-slide class="portfolio-card-item card-bg-gray">
                <img src="/assets/image/portfolio2.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">02</p>
                </div>
            </swiper-slide>
            <swiper-slide class="portfolio-card-item card-bg-red">
                <img src="/assets/image/portfolio3.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b swis portfolio-card__name">Фитнес-клуб “Глобал Фитнес”</p>
                    <p class="t-b manrope portfolio-card__count">03</p>
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
                  <img src="/assets/image/white-arrow.svg" alt="" class="prev-button" style="pointer-events:none;">
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
                  <img src="/assets/image/white-arrow.svg" alt="" style="pointer-events:none;">
                </v-btn>
            </div>
        </Swiper>
    </section>
    <section class="konkurs-section">
        <div class="wrapper konkurs-block">
            <img src="/assets/image/konkurs-back-mobile.png" alt="" class="konkurs-photo__mobile">
            <NuxtLink to="konkurs">
                <v-btn
                variant="flat"
                color="rgba(221, 58, 26, 1)"
                width="217"
                height="40"
                rounded="0"
                class="more-konkurs-button"
                >
                    <span class="button__text t-w swis">УЗНАТЬ ПОДРОБНОСТИ</span>
                    <span class="button__line more-konkurs"></span>
                </v-btn>
            </NuxtLink>
            <img src="/assets/image/bereal-inf-konkurs.svg" class="konkurs-be-real">
            <div class="konkurs-title-container">
                <h2 class="t-w swis konkurs-title">Конкурс для блогеров</h2>
                <div class="konkurs-line"></div>
            </div>
            <div class="konkurs-information-container">
                <p class="t-w manrope normal-benefit konkurs-information-text"><span class="swis big-benefit">Создай </span>лимитированную коллекцию одежды.</p>
                <p class="t-w manrope normal-benefit konkurs-information-text"><span class="swis big-benefit ">Продай </span>одежды больше всех остальных участников.</p>
                <p class="t-w manrope normal-benefit konkurs-information-text"><span class="big-benefit t-w swis">Выиграй </span>до 100 000 000 рублей и другие ценные призы.</p>
            </div>
        </div>  
    </section>
    <section class="wrapper partners-block">
        <h2 class="swis t-b partners-title">Партнёры</h2>
        <div class="partners-container">
            <div class="partner-item">
                <img src="/assets/image/partner1.png" alt="" class="partner-photo">
                <div class="partner-item__information-container">
                    <h2 class="swis t-b partner-item-title">Союз смешанных боевых единоборств «ММА» России</h2>
                    <img src="/assets/image/partner-dots.svg" alt="" class="partner-dots">
                    <p class="partner-item-text t-b manrope">Выражаю глубокую благодарность команде за высококачественную работу по созданию коллекции одежды для нашей компании. Каждый этап, от разработки дизайна до окончательного пошива, был выполнен оперативно и профессионально, с полным вниманием к деталям и соблюдением всех сроков.</p>

                    <p class="partner-item-text t-b manrope">Мы получили уникальную и стильную коллекцию, которая отражает бренд нашей компании и будет оценена нашими клиентами. С уверенностью рекомендуем вашу компанию как надежного партнера в сфере пошива одежды.</p>

                </div>
            </div>
            <div class="partner-item">
                <div class="partner-item__information-container">
                    <h2 class="swis t-b partner-item-title">Союз смешанных боевых единоборств «ММА» России</h2>
                    <img src="/assets/image/partner-dots.svg" alt="" class="partner-dots">
                    <p class="partner-item-text t-b manrope">Выражаю глубокую благодарность команде за высококачественную работу по созданию коллекции одежды для нашей компании. Каждый этап, от разработки дизайна до окончательного пошива, был выполнен оперативно и профессионально, с полным вниманием к деталям и соблюдением всех сроков.</p>

                    <p class="partner-item-text t-b manrope">Мы получили уникальную и стильную коллекцию, которая отражает бренд нашей компании и будет оценена нашими клиентами. С уверенностью рекомендуем вашу компанию как надежного партнера в сфере пошива одежды.</p>

                </div>
                <img src="/assets/image/partner2.png" alt="" class="partner-photo">
            </div>
            <div class="partner-item">
                <img src="/assets/image/partner1.png" alt="" class="partner-photo">
                <div class="partner-item__information-container">
                    <h2 class="swis t-b partner-item-title">Союз смешанных боевых единоборств «ММА» России</h2>
                    <img src="/assets/image/partner-dots.svg" alt="" class="partner-dots">
                    <p class="partner-item-text t-b manrope">Выражаю глубокую благодарность команде за высококачественную работу по созданию коллекции одежды для нашей компании. Каждый этап, от разработки дизайна до окончательного пошива, был выполнен оперативно и профессионально, с полным вниманием к деталям и соблюдением всех сроков.</p>

                    <p class="partner-item-text t-b manrope">Мы получили уникальную и стильную коллекцию, которая отражает бренд нашей компании и будет оценена нашими клиентами. С уверенностью рекомендуем вашу компанию как надежного партнера в сфере пошива одежды.</p>

                </div>
            </div>
            <div class="partner-item">
                <div class="partner-item__information-container">
                    <h2 class="swis t-b partner-item-title">Союз смешанных боевых единоборств «ММА» России</h2>
                    <img src="/assets/image/partner-dots.svg" alt="" class="partner-dots">
                    <p class="partner-item-text t-b manrope">Выражаю глубокую благодарность команде за высококачественную работу по созданию коллекции одежды для нашей компании. Каждый этап, от разработки дизайна до окончательного пошива, был выполнен оперативно и профессионально, с полным вниманием к деталям и соблюдением всех сроков.</p>

                    <p class="partner-item-text t-b manrope">Мы получили уникальную и стильную коллекцию, которая отражает бренд нашей компании и будет оценена нашими клиентами. С уверенностью рекомендуем вашу компанию как надежного партнера в сфере пошива одежды.</p>

                </div>
                <img src="/assets/image/partner2.png" alt="" class="partner-photo">
            </div>
        </div>
    </section>
    <InfoFooter/>
</template>

<style lang="scss" scoped>
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

    .header-section{
        background-color: rgba(23, 7, 7, 0.5);
        height: 740px;
        position: relative;
        
    }
    .header-slider{
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top:0;
        left: 0;
        z-index: -1;
        max-width: 1440px;
        width: 100%;
        height: 740px;
    }
    .header-slider__item{
        width: auto !important;
        max-width: 100%;
        height: 740px;
        img{
            object-fit: cover;
            height: 100%;
        }
    }
    .wrapper{
        max-width: 1440px;
        width: 100%;
        padding: 0 44px;
        margin-left:  auto;
        margin-right: auto;
    }
    .header-navigation{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 20px;
        width: 100%;
        align-items: flex-start;
        margin-top: 30px;
    }
    .header-block{
        padding-top: 1px;
        height: 100%;
        width: 100%;
        position: relative;
    }
    .header-link{
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
    }
    .header-contacts{
        display: flex;
        gap: 40px;
        
    }
    .header-links{
        display: flex;
        gap: 25px;
    }
    .header-text-container{
        margin-top: 214px;
        margin-left: 64px;
    }
    .header-title{
        text-transform: none;
        font-size: 64px;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: 0.05rem;
    }
    .header-text{
        margin-top: 22px;
        font-size: 16px;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 0.02rem;
        max-width: 710px;
    }
    .text-line-container{
        display: flex;
        flex-direction: row;
    }
    .dotted-line{
        border-bottom: 1px rgba(255, 252, 251, 1) dashed;
        max-width: 352px;
        width: 100%;
    }
    .header__social-media{
        display: flex;
        gap:15px;
        flex-direction: column;
        align-items: center;
        max-width: 27px;
        position: absolute;
        bottom: 65px;
    }
    .submit-request-button{
        transform: rotate(-90deg);
        position: absolute;
        bottom: 80px;
        right: -36px;
    }
    .button__text{
        font-size: 18px;
        font-weight: 400;
        line-height: 120%;
    }
    .button__line{
        border-left: dashed 1px rgba(255, 252, 251, 1);
        height: 40px;
        width: 1px;
        margin-left: 22px;
    }
    .about-us-block{
        background-image: url(/assets/image/aboutus-back.png);
        background-position: right 0;
        height: 820px;
        position: relative;
        z-index: 1;
        
    }
    .about-us-information{
        padding-bottom: 22px;
        padding-top:13px;
        padding-left: 64px;
        border-left: dashed 1px rgba(23, 7, 7, 1);
        transform: translateY(86px);
        height: 620px;
        
    }
    .about-us-title{
        text-transform: none;
        font-weight: 400;
        font-size: 32px;
        line-height: 120%;
        max-width: 710px;
    }
    .about-us-text{
        max-width: 710px;
        width:100%;
        font-size: 16px;
        letter-spacing: 0.02rem;
        line-height: 160%;
    }
    .awards-container{
        max-width: 706px;
        width:100%;
        display: flex;
        justify-content: space-between;
        margin-top: 44px;
    }
    .award-text{
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.02rem;
    }
    .sales-count{
        text-align: end;
        margin-bottom: 22px;
        font-size: 64px;
        font-weight: 700;
        line-height: 110%;
        width:100%;
        max-width: 710px;
    }
    .about-us-margin__top{
        margin-top: 44px;
    }
    .about-us__red-line{
        height: 155px;
        width: 2px;
        background-color: rgba(221, 58, 26, 1);
        position: absolute;
        z-index: 2;
        top:85px;
        left: 43px;

    }
    .our-benefit-section{
        background-color: rgba(1, 1, 1, 1);
    }
    .our-benefit{
        position: relative;
        height: 800px;
        background-image: url(/assets/image/benefit-back.png);
        padding-top: 1px;
    }
    .be-real{
        position: absolute;
        left: 0;
        top: -90px;
        max-height: 105px;
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
    .our-benefit__title-container{
        display: flex;
        margin-top: 90px;
        margin-left: 6px;
        gap: 38px;
    }
    .our-benefit-title{
        font-weight: 700;
        font-size: 64px;
        line-height: 120%;
    }
    .our-benefit-line{
        max-width: 386px;
        width: 100%;
        border-bottom: 1px dashed rgba(255, 252, 251, 1);
    }
    .benefit-information-container{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        margin-top: 39px;
        gap:38px;
    }
    .benefit-information-item{
        max-width: 708px;
        width: 100%;
    }
    .big-benefit{
        font-weight: 400;
        font-size: 32px;
        line-height: 120%;
    }
    .normal-benefit{
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
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
        left: 174px;
        z-index: 5;
    }
    .portfolio-card-container{
        display: flex;
        justify-content: flex-start;
        height: 100%;
        width: 1074px;
        flex-direction: row;
        overflow:hidden;
        margin-right: 0 !important;
    }
    .portfolio-card-item{
        max-width: 451px;
        width: 451px;
        padding-top:50px;
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
        height: 141px;
        width: 451px;
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
    .konkurs-section{
        background-color: rgba(1, 1, 1, 1);
    }
    .konkurs-block{
        height: 742px;
        background-image: url(/assets/image/portfolio-konkurs.png);
        position: relative;
    }
    .more-work{
        margin-left: 39px;
    }
    .more-konkurs{
        margin-left: 12px;
    }
    .more-konkurs-button{
        position: absolute;
        right: -44.5px;
        rotate: 270deg;
        bottom: 88.5px;
        z-index: 1;
    }
    .konkurs-be-real{
        position: absolute;
        bottom:0;
        right: 223px;
    }
    .konkurs-title-container{
        padding-top:88px;
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    .konkurs-title{
        font-weight: 700;
        font-size: 64px;
        line-height: 120%;
        margin-right: 7px;
    }
    .konkurs-line{
        width:290px;
        border-bottom: 1px dashed rgba(255, 252, 251, 1);
        translate: 44px;
    }
    .konkurs-information-container{
        margin-top:90px;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-right: 161px;
        margin-left: auto;
        max-width: 515px;
        gap:62px;

    }
    .konkurs-information-text{
        text-align: left;
        width: 100%;
    }
    .partners-block{
        padding:56px 0 0 0;
        
    }
    .partners-title{
        font-size: 64px;
        line-height: 120%;
        font-weight: 700;
        margin-bottom: 50px;
        margin-left: 44px;
    }
    .partners-container{
        display: flex;
        flex-direction: column;
    }
    .partner-item:nth-child(odd){
        display: flex;
        justify-content: flex-start;
        .partner-item__information-container{
            padding-left: 66px;
        }
    }
    .partner-item:nth-child(even){
        display: flex;
        justify-content: flex-end;
        .partner-item__information-container{
            padding-right: 66px;
        }
    }
    .partner-item__information-container{
        padding-top: 53px;
    }
    .partner-item-title{
        font-weight: 400;
        font-size: 32px;
        line-height: 120%;
        max-width: 514px;
        margin-bottom: 37px;
    }
    .partner-item-text{
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.02rem;
        margin-top: 25px;
        max-width: 579px;
    }
    
    .burger-menu {
        position: absolute;
        top: 26px;
        right: 44px;
        width: 40px;
        height: 12px;
        border-radius: 18px;
        display: none;
        gap: 8px;
        z-index: 10;

    }
    .burger-menu span {
        width: 40px;
        height: 2px;
        transition: 0.3s ease;
        transform-origin: center;
        background-color: rgba(255, 252, 251, 1);

    }
  
  .open1{
    transform: rotate(45deg) translateY(3px) translateX(4px);
    width: 21px !important;
  }
  
  .open2 {
    transform: rotate(-45deg) translateY(-3px) translateX(4px);
    width: 21px !important;
  }
  .konkurs-photo__mobile{
    display: none;
  }
  .hidden{
    width: 0 !important;
    transition: all ease-in-out 0.3s;
  }
  .burger-menu-container{
    transition: all ease-in-out 0.3s;
    z-index: 5;
    position:absolute;
    top:0;
    right: 0;
    width: 238px;
    height: 310px;
    background-color: rgba(23, 7, 7, 1);
  }

  .burger-menu-border{
    padding: 53px 20px 0 20px;
    width: 232px;
    height: 304px;
    z-index: 6;
    border-left: dashed 1px rgba(255, 252, 251, 1);
    border-bottom: dashed 1px rgba(255, 252, 251, 1);
    margin-left: auto;
    display: flex;
    flex-direction: column;
    gap: 56px;
  }
  .burger-links{
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  :global(.swiper-pagination-bullet-active){
    background-color: rgba(221, 58, 26, 1) !important;
  }
  :global(.swiper-pagination-bullet){
    background-color: rgba(255, 252, 251, 1);
    opacity: 1 !important; 
    margin-right: 65px !important; 
  }
  :global(.swiper-pagination){
    bottom: 49px !important;
  }
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
  .card-navigation-container{
    position: absolute;
    bottom: 50%;
    right: 0;
    z-index: 10;
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
    @media (max-width: 1335px) {
        .about-us-information{
            transform: translateY(57px);
        }
        .about-us__red-line{
            top: 57px;
        }
        .about-us-title{
            max-width: 550px;
        }
        .about-us-text{
            max-width: 550px;
        }
        .about-us-margin__top{
            margin-top:25px;    
        }
        .awards-container{
            margin-top:15px;
            max-width: 550px;
        }
        .award-text{
            max-width: 250px;
        }
        .sales-count{
            max-width: 550px;
        }
    }
    @media (max-width: 1200px) {
        .about-us-information{
            padding: 11px 0 15px 25px;
        }
        .about-us-block{
            background-size: 35%;
        }
        .our-benefit__title-container{
            flex-direction: column;
            gap: 12px
        }
        .our-benefit-line{
            max-width: 570px;
        }
        .partner-item{
            flex-direction: column;
            align-items: center;
        }
        .partners-container{
            display: flex;
            gap: 32px;
            margin-bottom: 56px;
        }
        .partner-photo{
            margin-bottom: 32px;
        }
        .partner-item:nth-child(even){
            flex-direction: column-reverse;
        }
        .partner-item__information-container{
            padding: 0 40px !important;
        }
        .partner-item__information-container:nth-child(even){
            padding: 0;
        }
        .partner-item__information-container:nth-child(odd){
            padding: 0;
        }
        .portfolio-block{
            height: 852px;
        }
        .portfolio-card-item{
            padding-top:150px;
        }
        .portfolio-title{
            padding-top: 56px;
            max-width: 100%;
        }
        .more-work-button{
            right: -69px;
            left: auto;
            z-index: 5;
        }
        .portfolio-card-item__bottom{
            height: 129px;
        }

    }
    @media (max-width: 1024px) {
        .header-text-container{
            margin-top: 100px;

        }
        .about-us-information{
            height: auto;
        }
        .about-us-block{
            background: none;
            height: 781px;
            padding-bottom: 120px;

        }
        .about-us-text{
            max-width: 100%;
        }
        .awards-container{
            flex-direction: row-reverse;
            justify-content: flex-end;
            align-items: center;
        }
        .sales-count{
            text-align: left;
        }
        .award-image{
            width: 124px;
            height: 103px;
        }
        .award-text{
            margin-right: 15px;
        }
        .our-benefit{
            background-size: cover;
        }
        .konkurs-be-real{
            max-width: 305px;
            max-height: 68px;
            left: 0;
            bottom: 73px;
        }

        .portfolio-block{
            padding-left: 0;
        }
        .be-real-portfolio{
            display: none;
        }


    }
    @media (max-width: 860px) {
        .header-text-container{
            margin-left: 26px;
            margin-top: 120px;
        }
        .header-title{
            font-size: 48px;
            line-height: 120%;
        }
        .header-text{
            font-size: 14px;
            line-height: 160%;
        }
        .header-contacts{
            gap: 20px;
        }
        .header-links{
            gap: 20px;
        }

        .our-benefit__title-container{
            margin-top:70px;
        }
        .benefit-information-container{
            margin-top: 36px;
            gap: 20px;
        }
        .partner-photo{

            max-height: 310px;
        }
        .konkurs-block{
            background-image: none;
            height: 658px;
        }
        .konkurs-photo__mobile{
            display: block;
            width: 100vw;
            height: 188px;
            position: absolute;
            top: 0;
            left: 0;
            border-bottom: 1px rgba(255, 252, 251, 1) dashed;
        }
        .konkurs-line{
            display: none;
        }
        .konkurs-title{
            z-index: 10;
        }
        .konkurs-title-container{
            padding-top: 56px;
            align-items: start;
        }
    }
    @media (max-width: 750px) {
        .burger-menu{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .header-text-container{
            margin-top: 164px;
        }

        .header-navigation{
            display: none;
        }
        .header__social-media{
            flex-direction: row;
            top: 20px;
            max-width: 119px;
            height: 25px;
            gap: 20px;
        }
        .header-section{
            height: 700px;
        }
        .dotted-line{
            display: none;
        }

        .header-slider{
            height: 700px;
        }
        .header-slider__item{
            height: 700px;
        }
    
        @media (max-width:680px) {
            .about-us-block{
                
                padding-bottom: 120px;
            }

            .about-us-title{
                font-size:26px;
            }
            .about-us-text{
                font-size:14px;
            }
            .sales-count{
                font-size: 48px;
                margin-bottom: 14px;
                margin-top: 15px;
            }
            .award-text{
                max-width: 208px;
                font-size: 14px;
            }
            .about-us-margin__top{
                margin-top: 20px;
            }

            .our-benefit-title{
                font-size: 48px;
            }
            .our-benefit-line{
                max-width: 430px;
            }
            .big-benefit{
                font-size: 26px;
            }
            .normal-benefit{
                font-size: 14px;
            }
            .uniq-sportsmen{
                font-size: 14px;
                font-family: manrope;
                
            }
            .partners-title{
                margin-bottom: 32px;
                
                font-size: 48px;
            }
            .partner-item-title{
                max-width: 100%;
                font-size: 26px;
                margin-bottom: 32px;
            }
            .partner-item-text{
                max-width: 100%;
                font-size: 14px;
            }

            .konkurs-information-container{
                gap: 24px;
                margin-left: 26px;
                margin-right: 0;
                margin-top: 72px;
            }
            .konkurs-title{
                font-size: 48px;
                height: 116px;
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
        @media (max-width: 640px){
            .partner-item__information-container{
                padding: 0 20px !important;
            }
            .partners-title{
                margin-left: 20px;
            }
            .portfolio-title{
                left: 20px;
            }
            .about-us__red-line{
                left: 20px;
            }
            .about-us-block{
                padding: 0 20px;
            }
            .header-block{
                padding: 0 20px;
                padding-top: 1px;
            }
            .burger-menu{
                right: 20px;
            }
            .our-benefit{
                padding-left: 20px;
                padding-right: 20px;
            }
            .konkurs-block{
                padding: 0 20px;
            }
            .more-konkurs-button{
                right: -68.5px;
            }
            .submit-request-button{
                right: -60px;
            }
        }
        @media (max-width: 390px) {
            .about-us-information{
                transform: translateY(30px);
                padding-bottom: 10px;
            }
            .about-us__red-line{
                transform: translateY(-28px);
            }
            .our-benefit__title-container{
                margin-top: 35px;
            }
            .our-benefit__title-container{
                gap: 10px;
            }
            .benefit-information-container{
                gap: 15px;
            }
            .our-benefit{
                padding-left: 15px;
                padding-right: 15px;
            }
            .portfolio-title{
                padding-top: 30px;
                
            }
        }
    }
</style>