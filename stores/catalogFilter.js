import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useCatalogFilter = defineStore('catalogFilter', () => {
    const categories = ref([
      { categoryName: "Худи", categoryId: "hoodies", categorySelected: false },
      { categoryName: "Свитшоты", categoryId: "sweatshirts", categorySelected: false },
      { categoryName: "Брюки", categoryId: "trousers", categorySelected: false },
      { categoryName: "Костюмы", categoryId: "costumes", categorySelected: false },
      { categoryName: "Лонгсливы", categoryId: "longsleeves", categorySelected: false },
      { categoryName: "Юбки", categoryId: "skirts", categorySelected: false },
      { categoryName: "Футболки", categoryId: "t-shirts", categorySelected: false },
      { categoryName: "Рубашки", categoryId: "shirts", categorySelected: false },
      { categoryName: "Верхняя одежда", categoryId: "outerwear", categorySelected: false }
    ]);
  
    const genders = ref([
      { categoryName: "Женщины", categoryId: "female", categorySelected: false }, 
      { categoryName: "Мужчины", categoryId: "male", categorySelected: false }, 
      { categoryName: "Унисекс", categoryId: "unisex", categorySelected: false }
    ]);
  
    const filterSizes = ref([
      { categoryName: "XS", categoryId: "XS", categorySelected: false }, 
      { categoryName: "S", categoryId: "S", categorySelected: false }, 
      { categoryName: "M", categoryId: "M", categorySelected: false }, 
      { categoryName: "L", categoryId: "L", categorySelected: false }, 
      { categoryName: "XL", categoryId: "XL", categorySelected: false }
    ]);
  
    const filterSearch =  ref("");
    const selectedSort = ref("");
    const minPrice = ref(0);
    const maxPrice = ref(0);
    const prices = ref([minPrice.value, maxPrice.value]);
  
  
    const selectCategory = (categoryArray, categoryId) => {
      categoryArray.forEach(category => {
        if (category.categoryId === categoryId) {
          category.categorySelected = !category.categorySelected;
        } else {
          category.categorySelected = false;
        }
      });
    };
    const setSearchQuery = (query) => {
      filterSearch.value = query;
    };
    const setPriceRange = (range) => {
      prices.value = range;
    };
  
    const setMinPrice = (price) => {
      minPrice.value = price;
      prices.value[0] = price;
    };
  
    const setMaxPrice = (price) => {
      maxPrice.value = price;
      prices.value[1] = price;
    };

    return {
      minPrice,
      maxPrice,
      prices,
      categories,
      genders,
      filterSizes,
      filterSearch,
      selectedSort,
      selectCategory,
      setSearchQuery,
      setPriceRange,
      setMinPrice,
      setMaxPrice,
    };
  });