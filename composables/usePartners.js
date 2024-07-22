export const usePartners = async () => {
    const { data, error } = await useFetch('http://api.noba.store/api/partners')

    if( error.value){
        console.error(error.value)
        return
    }
    return data.value

}