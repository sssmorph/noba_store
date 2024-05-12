<script setup>

</script>

<template>
    <InfoHeader/>
    <section class="wrapper portfolio-block">
        <img src="/assets/image/CardClothes.png" class="portfolio-image" alt="">
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
                <span class="button__text t-w swis">ХОЧУ ТАКЖЕ</span>
                <span class="button__line more-work"></span>
            </v-btn>
        </NuxtLink>
        <div class="portfolio-card-container">
            <div class="portfolio-card-item">
                <img src="/assets/image/portfolio1.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
            <div class="portfolio-card-item card-bg-gray">
                <img src="/assets/image/portfolio2.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom">
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
            <div class="portfolio-card-item__small card-bg-red">
                <img src="/assets/image/portfolio3.jpg" alt="" class="portfolio-card-item__photo">
                <div class="portfolio-card-item__bottom__mobile">
                    <p class="t-b manrope portfolio-card__count">01</p>
                </div>
            </div>
        </div>
    </section>
    <section class="review-section">
        <div class="wrapper review-block">
            <div class="review-block__left">
                <img src="/assets/image/review-bereal.png" alt="" class="review-be-real__small">
                <img src="/assets/image/review-bereal-b.png" alt="" class="review-be-real__big">
                <v-btn
                variant="flat"
                color="rgba(221, 58, 26, 1)"
                width="217"
                height="40"
                rounded="0"
                class="send-request"
                >
                    <span class="button__text t-w swis">ОСТАВИТЬ ЗАЯВКУ</span>
                    <span class="button__line send-request-line"></span>
                </v-btn>                
                <h2 class="t-w swis review-title">Отзыв</h2>
                <img src="/assets/image/partner-dots.svg" alt="">
                <p class="t-w manrope review-text">Сотрудничество с вашей командой по созданию новой коллекции одежды для "Московского спорта" превзошло все наши ожидания. Начиная с идеи и концепции, ваша команда профессионалов демонстрировала высокий уровень креативности и понимания наших потребностей.</p>
                <p class="t-w manrope review-text">Качество прототипов и готовой продукции безупречно. Мы особенно ценим внимание к деталям и высокий стандарт исполнения на каждом этапе производства. Готовая коллекция не только отражает бренд "Московский спорт", но и отлично вписывается в современные модные тренды.</p>
                <p class="t-w manrope review-text">Мы рады сотрудничеству и с уверенностью рекомендуем вашу компанию как надежного партнера в сфере пошива одежды. Благодарим за профессионализм, качество работы и понимание наших потребностей.</p>
            </div>
            <div class="review-block__right">
                <div class="right-content">
                    <div class="right-content__border-line"></div>
                    <div>
                        <h3 class="review-right-title t-b swis">Идея и концепция</h3>
                        <p class="review-right-text t-b manrope">На первом этапе разработки коллекции "Московский спорт" дизайнеры изучили модные тенденции и предпочтения целевой аудитории. Были определены стиль, направление коллекции, а также выбрана цветовая палитра и материалы.</p>
                    </div>
                    <div>
                        <h3 class="review-right-title t-b swis">Прототипирование и примерка</h3>
                        <p class="review-right-text t-b manrope">Создание прототипов одежды началось после утверждения концепции. Разработаны выкройки, выбраны ткани и материалы, после чего проведена примерка пробных моделей для коррекции дизайна и посадки.</p>
                    </div>
                    <div>
                        <h3 class="review-right-title t-b swis">Подготовка к производству</h3>
                        <p class="review-right-text t-b manrope">После утверждения прототипов началась подготовка к массовому производству. Закуплены необходимые материалы, создана технологическая документация и установлены стандарты качества.</p>
                    </div>
                    <div>
                        <h3 class="review-right-title t-b swis">Швейное производство</h3>
                        <p class="review-right-text t-b manrope">Массовое производство одежды для "Московского спорта" стартовало с вырезки и сшивания деталей по утвержденным выкройкам. Каждый этап производства контролировался для обеспечения высокого качества готовой продукции.</p>
                    </div>
                    <div>
                        <h3 class="review-right-title t-b swis">Упаковка и распределение</h3>
                        <p class="review-right-text t-b manrope">После завершения производства одежда упакована согласно стандартам компании. Готовая продукция отправлена на склад для последующей дистрибуции в торговые точки и к заказчикам.</p>
                    </div>
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
.portfolio-image{
    max-width: 386px;
    padding-top: 126px;
    position: absolute;
    left: 30px;
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
}
.portfolio-card-container{
    display: flex;
    justify-content: flex-end;
    height: 100%;
    padding-left: 129px;
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
    justify-content: flex-end;
    height: 141px;
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
.review-section{

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
}
</style>