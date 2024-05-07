<script setup>

</script>

<template>
    <section class="header-section">
        <div class="wrapper header-block">
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
                <h2 class="header-title manrope t-w">Создаём качественную одежду</h2>
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
                    <p class="normal-benefit t-w manrope">Изделия создаются по <span class="big-benefit t-r swis">индивидуальным параметрам </span><span class="big-benefit t-w swis">каждого спортсмена </span>и тренера, для чего производятся замеры по 12 размерным признакам.</p>
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
    <section class="konkurs-section">
        <div class="wrapper konkurs-block">
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
        </div>

    </section>
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
        margin-top: 42px;
    }
    .header-block{
        padding-top: 1px;
        height: 100%;
        width: 100%;
        background-image: url(/assets/image/info-back1.png);
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
        max-width: 774px;
        
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
        max-width: 710px;
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
        margin-bottom: 18px;
        font-size: 64px;
        font-weight: 700;
        line-height: 120%;
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
        background-color: rgba(23, 7, 7, 1);
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
    .konkurs-section{
        background-color: rgba(23, 7, 7, 1);
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
    }
    .konkurs-be-real{
        position: absolute;
        bottom:0;
        right: 223px;
    }
</style>