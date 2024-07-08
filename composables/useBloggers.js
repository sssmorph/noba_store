export const useBloggers = async () => {
    const { data, error } = await useFetch('http://api.noba.store/api/blogers')
    
    if (error.value) {
      console.error('Failed to fetch bloggers:', error.value)
      return []
    }
    
    return data.value.results
  } 