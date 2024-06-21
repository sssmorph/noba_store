<script>
export default {
  props: ['error'],
  async asyncData({ error, statusCode }) {
    return { error: { statusCode}};
  }
};
</script>

<template>
  <AppHeaderBig/>
  <section class="error-page">
    <p class="error-message__mobile">Кажется, здесь одежды нет</p>
    <div class="error-box">
        <img src="/public/image/error-image.png" alt="">
        <span class="error-code">{{error.statusCode}}</span>
    </div>
    <div class="error-information">
        <p class="error-message">Кажется, здесь одежды нет</p>
        <div class="arrow-container">
            <p class="arrow-text">Зато есть там</p>
            <img src="/public/image/error-arrow.svg" class="error-arrow">
        </div>



        <NuxtLink to="/" class="go-home-button d-flex flex-row justify-space-between align-center">Каталог
            <img src="/assets/image/error-text.svg" alt="">
        </NuxtLink>
        <p class="error-description">Возможно, страница была удалена или вовсе не существовала.</p>
    </div>
  </section>
  <AppFooter/>
</template>

<style scoped lang="scss">
    .arrow-container{
        position: relative;
    }
    .error-arrow{
        position: absolute;
        left: 135px;
        top: 80%;
    }
    .go-home-button{
        background-color: rgba(221, 58, 26, 1);
        color: rgba(255, 252, 251, 1);
        font-family: Manrope;
        font-size: 22px;
        font-weight: 400;
        line-height: 35.2px;
        letter-spacing: -0.02em;
        text-align: left;
        padding: 8px 30px;
        max-width: 190px;
        margin-top: 45px;
    }
    img{
        max-width: 580px;
        max-height: 580px;
    }
    .error-box{
        position: relative;
    }
    .error-code{
        position: absolute;
        top: 51%;
        left: 58%;
        Transform: translate(-50%, -50%);

        font-family: Swis721CnBTRusbyme-Roman;
        font-weight: 700;
        font-size: 160px;
        line-height: 120%;
        letter-spacing: 100px;

        pointer-events: none;

    }
    p{
        color:rgba(23, 7, 7, 1);
    }
    .error-page{
        max-width: 1440px;
        margin:50px auto;
        max-width: 1440px;
        padding: 0 145px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 80px;
    }
    .error-information{
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .error-message{
        font-family: Manrope;
        font-size: 54px;
        font-weight: 500;
        line-height: 120%;
        text-align: left;
        word-wrap: break-word;
        margin-top: 120px;
    }
    .arrow-text{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 165%;
        letter-spacing: 0.02rem;
        text-align: left;
        margin-top: 33px;
    }
    .error-description{
        font-family: Manrope;
        font-size: 16px;
        font-weight: 400;
        line-height: 165%;
        letter-spacing: 0.02rem;
        text-align: left;
        color: rgba(166, 163, 163, 1);
        margin-top: auto;

    }
    .error-message__mobile{
        display: none;
    }
    @media (max-width: 1250px) {
        .error-page{
            flex-direction: column;
            gap: 0;
        }
        .error-box{
            display: flex;
            justify-content: center;
        }
        .error-description{
            margin-top: 45px;
        }
        .error-message{
            margin-top: 0;
            display: none;
        }
        .error-message__mobile{
            display: block;
            font-family: Manrope;
            font-size: 36px;
            font-weight: 500;
            line-height: 120%;
            text-align: left;
            word-wrap: break-word;
            margin-top: 15px;
            margin-bottom: 45px;
        }
        .arrow-text{
            margin-left: auto;
            margin-right: 225px;
            max-width: 115px;
        }
        .error-arrow{
            left: auto;
            right: 170px;
        }
        .go-home-button{
            margin-right: 0;
            margin-left: auto;
            img{
                margin-left: 30px;
            }
        }
    }
    @media (max-width: 870px) {
        .error-page{
            padding: 25px 15px;
        }
        .error-description{
            font-size: 14px;
            line-height: 22.4px;
        }
        .go-home-button{
            width: 157px !important;
            height: 38px !important;
            padding: 5px 25px;
            font-size: 18px;
            line-height: 28.8px;
        }
        .arrow-text{
            margin-right: 215px;
        }
        .error-arrow{
            left: auto;
            right: 155px;
        }
        .error-box{
            img{
                width: 400px;
                height: 400px;
            }
        }
        .error-code{
            font-size: 100px;
            letter-spacing: 85px;
        }
    }
</style>