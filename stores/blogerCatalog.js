import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBlogerId = defineStore('userId', () => {
  const userId = ref(null);

  function setUserId(newUserId) {
    userId.value = newUserId;
  }
  return { userId, setUserId };
});