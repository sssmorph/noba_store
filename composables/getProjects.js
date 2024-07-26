export const getProjects = async () => {
    const { data, error } = await useFetch('http://api.noba.store/api/projects')

    if(error.value){
        console.error(error.value)
        return {}
    }
    return data.value.results
}