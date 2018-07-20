import { getData } from '../api/api.js';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODCUTS_FAILURE = "GET_PRODCUTS_FAILURE";

export const getProducts = () => {
    const response = getData('Products');
    if (response.error) {
        return { type: GET_PRODCUTS_FAILURE, error: response.error };
    }
    return { type: GET_PRODUCTS, products: { response: response.value || [] } };
}
