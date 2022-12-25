import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import productReduces from "./productsReducers";

const rootReducers = combineReducers({
    product:productReduces,
    filter: filterReducer,
})

export default rootReducers