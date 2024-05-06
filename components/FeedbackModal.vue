<script setup>
    const modalStore = useModal();
    const closeModal = () =>{
        modalStore.closeFeedBack();
    }
    let modalIsActive = computed(() => modalStore.feedbackIsOpen)
</script>

<template>
    <div class="modal modal_active" id="modal-1" v-if="modalIsActive">
        <div class="modal__content">
          <div class="modal__close-button" @click="closeModal"></div>
          <div class="modal__wrapper">
            <div class="modal__top_line">
              <div class="contact_form__input__wrapper">
                <input name="name" type="text" class="contact-form__input contact-form__input_name" placeholder="ИМЯ">
                <div class="contact-form__error contact-form__error_name"></div>
              </div>
              <div class="contact_form__input__wrapper">
                <input name="tel" type="tel" class="contact-form__input contact-form__input_tel" onkeypress='validate(event)' placeholder="НОМЕР" value="+7">
                <div class="contact-form__error contact-form__error_tel"></div>
              </div>
            </div>
            <div class="contact_form__input__wrapper">
              <input name="comment" type="comment" class="contact-form__input contact-form__input_comment" placeholder="КОМАНТАРИЙ">
              <div class="contact-form__error contact-form__error_comment"></div>
            </div>
            <h3 class="contact_form__input__wrapper">Расскажите о себе (сфера деятельности, охват аудитории)</h3>
            <div class="contact_form__input__wrapper">
              <input name="about" type="about" class="contact-form__input contact-form__input_about" >
              <div class="contact-form__error contact-form__error_about"></div>
            </div>
            <div class="modal__bottom_line">
              <div class="CAPTCHA">CAPTCHA</div>
              <button class="btn_take_part">
                <h4>Отправить</h4>
                <img class="btn_arrow" src="assets/image/arrow_button.svg" alt="arrow">
              </button>
            </div>
            <h4 class="modal_warn">Нажимая на кнопку Отправить, вы даёте согласие на <span>обработку персональных данных</span></h4>
          </div>
        </div>
      </div>
</template>

<style lang="scss">
@import "/assets/css/index.scss";

</style>