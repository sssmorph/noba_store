export const getSeo = async (id) => {
    const { data, error } = await useFetch('http://api.noba.store/api/seo/'+id)

    if(error.value){
        console.error(error.value)
        return {}
    }
    return data.value.object
}