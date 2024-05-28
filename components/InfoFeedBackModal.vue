<script setup>
  import { vMaska } from "maska"
 const modalStore = useModal();
 const closeModal = () => {
    modalStore.closeInfoFeedBack();
 } 
 let modalIsActive = computed(() => modalStore.infoFeedBackOpen)
</script>

<template>
    <section class="modal-container" v-if="modalIsActive">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-block">
            <div class="modal__close-button feed-back__close-button" @click="closeModal"></div>
            <div class="input-line">
                <div class="contact_form__input__wrapper">
                    <input name="name" type="text" class="contact-form__input contact-form__input_name input-padding" placeholder="ИМЯ">
                    <div class="input-border"></div>
                </div> 
                <div class="contact_form__input__wrapper">
                    <input name="tel" type="tel" class="contact-form__input contact-form__input_tel input-padding" placeholder="НОМЕР" value="+7"  v-maska data-maska="+7(###)-###-##-##">
                    <div class="input-border"></div>
                  </div>
            </div>
            <div class="contact_form__input__wrapper comment-input">
                <textarea name="comment" type="comment" class="contact-form__input contact-form__input_comment input-padding" placeholder="КОММЕНТАРИЙ"></textarea>
                <div class="input-border"></div>
            </div>
            <div class="modal-bottom">
                <div class="capcha-button">
                    <div class="capcha"></div>
                    <v-btn
                    class="submit-button"
                    variant="flat"
                    color="rgba(221, 58, 26, 1)"
                    rounded="0"
                    height="40"
                    width="193"
                    >
                        <span class="button-text">ОТПРАВИТЬ</span>
                        <div class="button-line"></div>
                    </v-btn>
                </div>
                <div class="modal_warn-container">
                    <h4 class="modal_warn">Нажимая на кнопку <span class="modal_warn__bold">Отправить</span>, вы даёте<span> согласие на обработку персональных данных</span></h4>
                    <div class="modal_warn-line"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "/assets/css/index.scss";
    input:-webkit-autofill,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:active
    {
    -webkit-text-fill-color: white !important;
    -webkit-background-clip: text;
    }
    .modal-container{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top:0;
        left: 0;
        z-index: 100;
        width: 100vw;
        height: 100vh;
    }
    .modal-background{
        width: 100vw;
        height: 100vh;
        background-color: rgba(166, 163, 163, 0.3);
        position: absolute;
        top: 0;
        left: 0;
    }
    .modal-block{
        width: 710px;
        height: 480px;
        background-color: rgba(23, 7, 7, 1);
        z-index: 1000;
        position: relative;
        padding: 54px 64px 43px 64px;
    }
    .feed-back__close-button{
        top: 26px;
        right: 26px;
    }
    .input-padding{
        padding-top: 13px;
        padding-left: 12px;
        padding-right: 12px;
    }
    .input-border{
        margin-top: 0;
    }
    .input-line{
        display: flex;
        flex-direction: row;
        gap: 61px;
        justify-content: space-between;
    }
    .contact_form__input__wrapper{
        margin-bottom: 32px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .contact-form__input_name{
        text-transform: none;
      }
    .comment-input{
        height: 138px;
        margin-bottom: 48px;
    }
    textarea{
        font-size: 18px;
        line-height: 28.8px;
        color: white;
        font-family: "Swis721 Cn RM";
        font-weight: 400;
        height: 130px;
    }
    .modal-bottom{
        display: flex;
        flex-direction: column;
        gap: 26px;
        justify-content: flex-end;
        align-items: flex-end;
    }
    .capcha-button{
        display: flex;
        justify-content: flex-end;
        gap: 28px;
    }
    .capcha{
        width: 193px;
        height: 40px;
        border: 1px rgba(255, 252, 251, 1) solid
    }
    .submit-button{
        padding: 0;
        padding-right: 16px;
    }
    .button-text{
        font-size: 18px;
        font-weight: 400;
        line-height: 120%;
        font-family: "Swis721 Cn RM";
    }
    .button-line{
        height: 40px;
        border-right: 1px dashed rgba(255, 252, 251, 1);
        transform: translateX(39px);
    }
    .modal_warn{
        color: rgba(255, 252, 251, 1);
        width: 386px;
        text-align: end;
        font-size: 16px;
        font-weight: 400;
        line-height: 160%;
        letter-spacing: 0.02rem;
        font-family: Manrope;
    }
    .modal_warn{
        span::after{
            content: none;
        }
    }
    .modal_warn__bold{
        font-weight: 600;
    }
    .modal_warn-line{
        width: 261px;
        height: 1px;
        background-color: rgba(255, 252, 251, 1);
    }
    .modal_warn-container{
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    @media (max-width: 768px) {
        .modal-block{
            max-width: 390px;
            padding: 56px 26px;
            height: 518px;
        }
        .input-line{
            flex-direction: column;
            gap: 0;
        }
        .contact_form__input__wrapper{
            margin-bottom: 16px;
        }
        .comment-input{
            margin-bottom: 36px;
        }
        .capcha-button{
            gap: 26px;
        }
        .capcha{
            max-width: 130px;

        }
        .submit-button{
            max-width: 182px;
        }
        .modal-bottom{
            gap: 26px;
        }
        .modal_warn{
            font-size: 14px;
        }
        .modal_warn-line{
            max-width: 230px;
        }
    }
    @media (max-width: 400px) {
        .modal-block{
            padding: 55px 10px;
            max-width: 350px;
        }
        .capcha-button{
            gap: 10px;
        }
    }
</style>