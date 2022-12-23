import { ADD_TO_CART, REMOVE_CART } from "../actionsTypes/actionTypes"

export const addTocart = (product) => {
    return {
        type: ADD_TO_CART,
        payload:product
    };
}
export const removeToCart = (product) => {
    return {
        type: REMOVE_CART,
        payload:product
    };
}