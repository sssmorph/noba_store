<script setup>
  import { vMaska } from "maska"
  import { getDocument } from '~/composables/getDocument';
  const privacy = await getDocument(37);

    const modalStore = useModal();
    const closeModal = () =>{
        modalStore.closeFeedBack();
    }
    let modalIsActive = computed(() => modalStore.feedbackIsOpen)
</script>

<template>
    <div class="modal modal_active" id="modal-1" v-if="modalIsActive">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal__content">
          <div class="modal__close-button" @click="closeModal"></div>
          <div class="modal__wrapper">
            <div class="modal__top_line">
              <div class="contact_form__input__wrapper">
                <input name="name" type="text" class="contact-form__input contact-form__input_name" placeholder="ИМЯ">
                <div class="contact-form__error contact-form__error_name"></div>
                <div class="input-border"></div>
              </div> 
              <div class="contact_form__input__wrapper">
                <input name="tel" type="tel" class="contact-form__input contact-form__input_tel" placeholder="НОМЕР" value="+7" v-maska data-maska="+7(###)-###-##-##">
                <div class="contact-form__error contact-form__error_tel"></div>
                <div class="input-border"></div>
              </div>
            </div>
            <div class="contact_form__input__wrapper comment-input">
              <textarea name="comment" type="comment" class="contact-form__input contact-form__input_comment" placeholder="КОММЕНТАРИЙ"></textarea>
              <div class="contact-form__error contact-form__error_comment"></div>
              <div class="input-border"></div>
            </div>

            <div class="contact_form__input__wrapper about-input">
              <textarea name="about" type="about" class="contact-form__input contact-form__input_about" placeholder="Расскажите о себе (сфера деятельности, охват аудитории)"></textarea>
              <div class="contact-form__error contact-form__error_about"></div>
              <div class="input-border"></div>
            </div>
            <div class="modal__bottom_line">
              <div class="CAPTCHA">CAPTCHA</div>
              <button class="btn_take_part">
                <h4>Отправить</h4>
                <NuxtImg  class="btn_arrow" src="assets/image/arrow_button.svg" alt="arrow"/>
              </button>
            </div>
            <h4 class="modal_warn">Нажимая на кнопку Отправить, вы даёте согласие на 
              <NuxtLink  :to="{ name: 'document-alias', params: { alias: 'politika-konfedenczialnosti' } }" class="personal-data__link">обработку персональных данных</NuxtLink >
            </h4>

          </div>
        </div>
      </div>
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
.personal-data__link{
  text-decoration: underline;
}
.modal-background{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
}
.modal__content{
  z-index: 10;
}
.contact-form__input{
  padding: 8px 12px 0 12px;
}
.contact_form__input__wrapper{
  margin-bottom: 36px;
}
.modal__bottom_line{
  margin-top: 6px;
}
.contact-form__input_about{
  height: 81px;
}
.about-input{
  height: 92px;
}
.contact-form__input_name{
  text-transform: none;
}
.contact-form__input_about{
  font-size: 18px;
  line-height: 160%;
  font-family: "Swis721 Cn RM";
}
.comment-input{
  height: 46px;
}
.contact-form__input_comment{
  height: 35px;
}
@media (max-width: 560px) {
  .modal__bottom_line{
    margin-bottom: 24px;
    height: 40px;
    margin-top: 54px
  }
  .CAPTCHA{
    width: 156px;
    height: 40px;
  }
  .about-input{
    height: 138px;
  }
  .contact-form__input_about{
    height: 127px;  
  }
  .contact_form__input__wrapper{
    margin-bottom: 16px;
  }
  .comment-input{
    height: 92px;
  }
  .contact-form__input_comment{
    height: 81px;
  }
}
@media (max-width: 400px) {
    .modal__content{
      max-width: 350px;
      padding: 56px 10px;
    }
}
</style>