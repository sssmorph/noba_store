export const useKonkurs = async () => {
    const { data, error } = await useFetch('http://api.noba.store/api/konkurs/39')
    
    if (error.value) {
      console.error('Failed to fetch bloggers:', error.value)
      return []
    }
    
    return data.value.object
  } 