import { defineStore } from 'pinia'

export const useModal = defineStore({
    id: 'cartModal',
    state: () => ({
        cartIsOpen: false,
        feedbackIsOpen: false,
        infoFeedBackOpen: false,
        appOrder: false,
        errorModal: false,
        placedOrder: false,
    }),
    actions: {
        openCartModal(){
            this.cartIsOpen = true
        },
        closeCartModal(){
            this.cartIsOpen = false
        },
        openFeedback(){
            this.feedbackIsOpen = true
        },
        closeFeedBack(){
            this.feedbackIsOpen = false
        },
        openInfoFeedBack(){
            this.infoFeedBackOpen = true;
        },
        closeInfoFeedBack(){
            this.infoFeedBackOpen = false;
        },
        openAppOrder(){
            this.appOrder = true;
        },
        closeAppOrder(){
            this.appOrder = false;
        },
        openErrorModal(){
            this.errorModal = true;
        },
        closeErrorModal(){
            this.errorModal = false;
        },
        openPlacedOrder(){
            this.placedOrder = true;
        },
        closePlacedOrder(){
            this.placedOrder = false;
        }

    }
})


