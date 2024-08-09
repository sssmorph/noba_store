<script setup>
import { ref, computed } from 'vue';
import { vMaska } from 'maska';
import { useModal } from '../stores/modal'; 
import { getDocument } from '~/composables/getDocument';
import { defineRule, useForm, Field as VeeField, Form as VeeForm } from 'vee-validate';
import { required, email } from '@vee-validate/rules';

defineRule('required', required);
defineRule('email', email);
defineRule('customEmail', value => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(value) || 'Поле должно быть действительным электронным адресом.';
});

const privacy = await getDocument(37);
const modalStore = useModal();

const closeModal = () => {
  modalStore.closeFeedBack();
};

const modalIsActive = computed(() => modalStore.feedbackIsOpen);

const { handleSubmit, values } = useForm({
  initialValues: {
    name: '',
    tel: '',
    comment: '',
    about: ''
  }
});

const submitForm = handleSubmit(async (values) => {
  try {
    const response = await fetch('http://api.noba.store/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        form_name: 'konkurs',
        name: values.name,
        phone: values.tel, 
        comment: values.comment,
        message: values.about,
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    closeModal();
  } catch (error) {
    console.error('Error:', error);
  }
});
</script>

<template>
  <div class="modal modal_active" id="modal-1" v-if="modalIsActive">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal__content">
      <div class="modal__close-button" @click="closeModal"></div>
      <div class="modal__wrapper">
        <form @submit="submitForm">
          <div class="modal__top_line">
            <div class="contact_form__input__wrapper">
              <VeeField name="name" rules="required" v-slot="{ field, meta }">
                <input v-bind="field" type="text" class="contact-form__input contact-form__input_name" placeholder="ИМЯ"/>
                <div class="contact-form__error contact-form__error_name" v-if="meta.touched && !meta.valid">Это поле обязательно</div>
                <div class="input-border"></div>
              </VeeField>
            </div>
            <div class="contact_form__input__wrapper">
              <VeeField name="tel" rules="required" v-slot="{ field, meta }">
                <input v-bind="field" type="tel" class="contact-form__input contact-form__input_tel" placeholder="НОМЕР"  v-maska data-maska="+7(###)-###-##-##"/>
                <div class="contact-form__error contact-form__error_tel" v-if="meta.touched && !meta.valid">Это поле обязательно</div>
                <div class="input-border"></div>
              </VeeField>
            </div>
          </div>
          <div class="contact_form__input__wrapper comment-input">
            <VeeField name="comment" v-slot="{ field, meta }">
              <textarea v-bind="field" class="contact-form__input contact-form__input_comment" placeholder="КОММЕНТАРИЙ"></textarea>
              <div class="contact-form__error contact-form__error_comment" v-if="meta.touched && !meta.valid">Это поле обязательно</div>
              <div class="input-border"></div>
            </VeeField>
          </div>
          <div class="contact_form__input__wrapper about-input">
            <VeeField name="about" v-slot="{ field, meta }">
              <textarea v-bind="field" class="contact-form__input contact-form__input_about" placeholder="Расскажите о себе (сфера деятельности, охват аудитории)"></textarea>
              <div class="contact-form__error contact-form__error_about" v-if="meta.touched && !meta.valid">Это поле обязательно</div>
              <div class="input-border"></div>
            </VeeField>
          </div>
          <div class="modal__bottom_line">
            <div class="CAPTCHA">CAPTCHA</div>
            <button type="submit" class="btn_take_part">
              <h4>Отправить</h4>
              <img class="btn_arrow" src="assets/image/arrow_button.svg" alt="arrow"/>
            </button>
          </div>
        </form>
        <h4 class="modal_warn">Нажимая на кнопку Отправить, вы даёте согласие на 
          <NuxtLink :to="{ name: 'document-alias', params: { alias: 'politika-konfedenczialnosti' } }" class="personal-data__link">обработку персональных данных</NuxtLink>
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