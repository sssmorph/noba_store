export const useContacts = async () => {
    const { data, error} = await useFetch('http://api.noba.store/api/contacts/32')
    if (error.value){ 
        console.error(error.value)
        return {}
    }
    return data.value.object
}