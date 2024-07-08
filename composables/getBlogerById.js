export const getBloger = async (id) =>{
    const { data, error} = await useFetch('http://api.noba.store/api/blogers/'+id)

    if(error.value){
        console.error(error.value);
        return {}
    }
    return data.value.object
}