export const getProjectById = async (id) => {
    const { data, error} = await useFetch('http://api.noba.store/api/projects/'+id)

    if(error.value){
        console.error(error.value);
        return {}
    }
    return data.value.object
}