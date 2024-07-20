export const useBloggers = async () => {
  const { data, error } = await useFetch('http://api.noba.store/api/blogers');
  
  if (error.value) {
    console.error(error.value);
    return null; 
  }
  return data.value.results;
}