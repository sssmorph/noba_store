import { defineStore } from 'pinia'
import { ref } from 'vue';

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
    localStorage.setItem('cart', JSON.stringify(productInCart.value))

  }
  function getProductInCart(){
    const storage = localStorage.getItem('cart')
    productInCart.value = JSON.parse(storage)
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
  // returns
  return {
    productInCart,
    totalCartPrice,
    clearCart,
    updateStorage,
    getProductInCart,
    addToCart,
    removeProduct,

  }
})