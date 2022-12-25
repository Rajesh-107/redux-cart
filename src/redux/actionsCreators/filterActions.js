import { TOGGLE_BRAND, TOGGLE_STOCK } from "../actionsTypes/actionTypes"

export const toggleBrand = (brandName) => {
    return {
        type:TOGGLE_BRAND,
        payload: brandName,
    }
}
export const toggleStck = () => {
    return {
        type:TOGGLE_STOCK,
       
    }
}