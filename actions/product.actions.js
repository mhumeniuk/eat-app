import { Api } from '../api/api.js';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODCUTS_FAILURE = "GET_PRODCUTS_FAILURE";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
import { dispatch } from "redux-thunk";

export const getProducts = () => {
  const response = getData('Products');
  if (response.error) {
      return { type: GET_PRODCUTS_FAILURE, error: response.error };
  }
  return { type: GET_PRODUCTS, products: { response: response.value || [] } };
}

export function getProductsAsync(dispatch) {
  return Api.getData("products")
    .then(products => {
      dispatch(productsData(products));
    })
    .catch(error => {
      console.warn(error);
      dispatch(productsError(error));
    });
}

export async function saveProductAsync(products) {
    return Api.setData("products", products)
    .then(() =>
      dispatch(productsData(products)))
    .catch(error => {
      console.log(error);
      dispatch(productsError(error));
    })
}

function productsData(data) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data
  }
}

function productsError(error) {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: error
  }
}
