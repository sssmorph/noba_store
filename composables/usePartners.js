export const usePartners = async () => {
    const { data, error } = await useFetch('http://api.noba.store/api/partners')
}