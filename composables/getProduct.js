export const getProduct = async (id) => {

    const { data, error } = await useFetch('http://api.noba.store/api/product/'+id);

    if(error.value) {
        console.error(error.value);
        return {};
    }

    return data.value.object;
}