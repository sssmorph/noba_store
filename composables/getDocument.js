export const getDocument = async (id) => {
    const { data, error } = await useFetch('http://api.noba.store/api/details/'+id)

    if(error.value){
        console.error(error.value)
        return {}
    }
    return data.value.object
}