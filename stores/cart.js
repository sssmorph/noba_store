import { defineStore } from 'pinia'

export const shopCart = defineStore('cart',() => {
  // data
  const productInCart = ref([]);
  

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
    productInCart.value = productInCart.value.filter((element) => element.id !== itemID);
    updateStorage();
  }
  // переписать
  function plusCount(itemID){
    productInCart.value.count++;
    updateStorage();
  }
  // переписать
  function minusCount(itemID){
    if(productInCart.value.count <= 1){
      removeProduct(itemID);
    }else{
      productInCart.value.count--;
      updateStorage();
    }
  }

  function getCost(itemID){
    console.log()
  }
  // returns
  return {
    productInCart,
    clearCart,
    updateStorage,
    getProductInCart,
    addToCart,
    removeProduct,

    plusCount,
    minusCount,

  }
})