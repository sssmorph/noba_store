<script setup>
  import { useModal } from '../stores/modal';
    import { getDocument } from '~/composables/getDocument';
    
    const obmen = await getDocument(34);
    const delivery = await getDocument(35);
    const payment = await getDocument(36);
    const privacy = await getDocument(37);
    const modalStore = useModal();
    let searchBoxIsActive = ref(false);
    const openModal = () =>{
        modalStore.openInfoFeedBack();
    }
    const toggleSearch = () => {
        searchBoxIsActive.value = !searchBoxIsActive.value;
    };
</script>

<template>
    <footer>
        <!-- <div class="search-bar__mobile"
        :class="{mobileSearchActive: searchBoxIsActive}">1
            <v-responsive max-width="100%" class="search-box-container__mobile">
                <v-text-field class="search-box__mobile"
                clearable label="Поиск" 
                variant="underlined"
                append-inner-icon="mdi-magnify"
                base-color="rgba(23, 7, 7, 1)"
                color="rgba(23, 7, 7, 1)"
                >
                </v-text-field>

            </v-responsive>
        </div> -->
        <div class="footer-wrapper">
            <div class="link-container">
                <ul class="link-list">
                    <li class="footer-link">
                      <NuxtLink :to="{ name: 'document-alias', params: { alias: 'obmen-i-vozvrat' } }" class="underline-hover-effect">
                        Обмен и возврат
                      </NuxtLink>
                    </li>
                    <li class="footer-link">
                      <NuxtLink :to="{ name: 'document-alias', params: { alias: 'dostavka' } }" class="underline-hover-effect">
                        Доставка
                      </NuxtLink>
                    </li>
                    <li class="footer-link">
                      <NuxtLink :to="{ name: 'document-alias', params: { alias: 'oplata' } }" class="underline-hover-effect">
                        Оплата
                      </NuxtLink>
                    </li>
                    <li class="footer-link">
                      <span class="underline-hover-effect cursor-pointer" @click="openModal()">Связаться с нами</span>
                    </li>
                    <li class="footer-link">
                      <NuxtLink to="/info" class="underline-hover-effect">О компании</NuxtLink>
                    </li>
                    <li class="footer-link">
                        <NuxtLink :to="{ name: 'document-alias', params: { alias: 'politika-konfedenczialnosti' } }" class="underline-hover-effect">
                            Политика конфиденциальности
                        </NuxtLink>
                    </li>
                  </ul>
            </div>
            <!-- <v-responsive max-width="424" class="search-box-container">
                <v-text-field class="search-box"
                clearable label="Поиск" 
                variant="underlined"
                append-inner-icon="mdi-magnify"
                base-color="rgba(23, 7, 7, 1)"
                color="rgba(23, 7, 7, 1)"
                >
                </v-text-field>
                <v-btn class="search-mobile"
                variant="flat"
                color="rgba(166, 163, 163, 1)"
                size="49"
                rounded="0"
                @click="toggleSearch()">
                    <img src="/assets/image/search-btn-mobile.svg" alt="">
                </v-btn>
            </v-responsive> -->

        </div>

    </footer>
</template>

<style scoped>
    .mobile-search-bar{
        position: absolute;
        right: 49px;
    }
    .footer-wrapper{
        max-width: 1440px;
        margin: auto;
        padding: 23px 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
    }
    .search-mobile{
        display: none;
    }
    .search-box input{
        color: rgba(23, 7, 7, 1) !important;
    }
    :global(.v-field__append-inner){
        margin-right: 22px !important;
    }
    :global(.v-text-field input){
        margin-left: 22px !important;
        color: rgba(23, 7, 7, 1) !important;
    }
    :global(.v-label.v-field-label){
        margin-left: 22px !important; 
    }
    footer{
        font-family: 'Manrope';
        font-weight: 400;
        font-size: 18px;
        letter-spacing: -0.02rem;
        line-height: 115%;
        color: rgba(23, 7, 7, 1);
        background-color: rgba(216, 216, 216, 1);
    }
    .link-list{
        display: flex;
        flex-direction: column;
        gap: 4px 90px;
        flex-wrap: wrap;
        height: 95px;
    }
    .footer-link{
        flex: 0 0 30%;
    }
    .underline-hover-effect {
        text-decoration: none;
        color: inherit;
      }
      
      .underline-hover-effect {
        display: inline-block;
        padding: 4px 4px 3px 4px; 
        position: relative;
      }
      
      .underline-hover-effect::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: rgba(221, 58, 26, 1);
        transition: width 0.25s ease-out;
      }
      .underline-hover-effect:hover::before {
        width: 100%;
      }
      .search-bar__mobile{
        display: none;
        padding: 15px;
      }
      @media (max-width: 1200px) {
        .search-box-container{
            max-width: 300px !important;
        }
        .link-list{
            gap: 4px 30px;
        }
      }
      @media (max-width: 1024px) {
        .footer-wrapper{
            justify-content: space-between;   
        }
      }
      @media (max-width: 800px) {
        .search-box-container{
            max-width: 49px !important;
        }
        .search-mobile{
            display: inline;
            margin-left: auto;
        }
        .search-box{
            display: none;
        }
        .mobileSearchActive{
            display: block;
        }
      }
      @media (max-width: 680px) {
        footer{
            font-size: 14px;
            line-height: 115%;
        }
        .link-list{
            gap: 4px 19px;
        }
        .footer-link{
            height: 24px;
        }
        .footer-wrapper{
            align-items: start;
        }
        .underline-hover-effect{
            padding-left: 0;
            padding-right: 0;
        }
      }
      @media (max-width: 640px) {
        .footer-wrapper{
            padding: 23px 15px;
        }
      }

      @media (max-width: 420px) {
        .link-list{
            gap: 4px;
        }
        .footer-wrapper{
            padding: 23px 10px;
        }
      }
</style>