import { GET_PRODUCTS, GET_PRODCUTS_FAILURE } from '../actions/product.actions.js';
//TODO: better handle error;
export const products = (state = {}, action) => {
    let currentState = { ...state, error: null };
    switch (action.type) {
    case GET_PRODUCTS:
        return {...currentState, products: action.products};
    case GET_PRODCUTS_FAILURE:  
        return {...currentState, products: [], error: action.error}
    default:  
        return state;
    }
}