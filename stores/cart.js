import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const shopCart = defineStore('cart',() => {
  // data
  const productInCart = ref([]);
  const totalCartPrice = computed(() => {
    return productInCart.value.reduce((total, item) => total + (item.price * item.count), 0);
  })
  // methods
  function clearCart(){
    productInCart.value = [];
    updateStorage();
  }
  function updateStorage(){
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(productInCart.value))
    }
  }
  function getProductInCart(){
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem('cart')
      if (storage) {
        productInCart.value = JSON.parse(storage)
      }
    }
  }
  function addToCart(product){
    productInCart.value.push(product);
    updateStorage();
  }
  // удаление по ID товара
  function removeProduct(itemID){
    productInCart.value = productInCart.value.filter(element => element.id !== itemID)
    updateStorage();
  }
  function checkInCart(itemID) {
    return productInCart.value.some(element => element.id === itemID);
  }
  // returns
  return {
    productInCart,
    totalCartPrice,
    clearCart,
    updateStorage,
    getProductInCart,
    addToCart,
    removeProduct,
    checkInCart
  }
})