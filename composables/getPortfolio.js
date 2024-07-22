export const getPortfolio = async () => {
    const { data, error } = await useFetch('http://api.noba.store/api/portfoliocategory')
    
    if( error.value ){
        console.error(error.value)
        return []
    }
    return data.value
}