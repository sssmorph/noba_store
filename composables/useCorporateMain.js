export const useCorporateMain = async () => {
    const { data, error } = await useFetch('http://api.noba.store/api/index/1')

    if ( error.value ){
        console.error(error.value)
        return {}
    }
    
    return data.value.object
}