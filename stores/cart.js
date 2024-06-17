import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCartStore = defineStore('cart', () => {
    const cart = ref([]);
  
    const saveCart = () => {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(cart.value));
      }
    };
  
    const loadCart = () => {
      if (process.client) {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          cart.value = JSON.parse(storedCart);
        }
      }
    };
  
    const addToCart = (product) => {
      const existingProduct = cart.value.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        cart.value.push({ ...product, count: 1 });
      }
      saveCart();
    };
  
    const removeFromCart = (productId) => {
      const productIndex = cart.value.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        cart.value.splice(productIndex, 1);
      }
      saveCart();
    };
  
    const updateCartItemCount = (productId, count) => {
      const product = cart.value.find(item => item.id === productId);
      if (product) {
        product.count = count;
        if (product.count <= 0) {
          removeFromCart(productId);
        } else {
          saveCart();
        }
      }
    };
  
    const clearCart = () => {
      cart.value = [];
      saveCart();
    };
  
    loadCart();
    return {
        cart,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        clearCart,
      };
  });