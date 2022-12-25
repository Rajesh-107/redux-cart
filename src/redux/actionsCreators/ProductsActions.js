import { ADD_TO_CART, LOAD_PRODUCT, PRODUCT_LOADED, REMOVE_CART } from "../actionsTypes/actionTypes"

export const addTocart = (product) => {
    return {
        type: ADD_TO_CART,
        payload:product
    };
}
export const loadProduct = (data) => {
    return {
        type: LOAD_PRODUCT,
        payload:data
    };
}
export const removeToCart = (product) => {
    return {
        type: REMOVE_CART,
        payload:product
    };
}
export const loaded = (products) => {
    return {
        type: PRODUCT_LOADED,
        payload:products
    };
}