import { GET_PRODUCTS, GET_PRODCUTS_FAILURE, GET_PRODUCTS_SUCCESS } from '../actions/product.actions.js';

//TODO: better handle error;
export const products = (state = {}, action) => {
    let currentState = { ...state, error: null };
    switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
        console.warn(action.payload);
        return {...currentState, products: action.payload};
    case GET_PRODCUTS_FAILURE:  
        return {...currentState, products: [], error: action.error};
    default:
        return state;
    }
}