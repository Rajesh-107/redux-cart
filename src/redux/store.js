import { createStore } from "redux";
import productReduces from "./reducers/productsReducers";
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(productReduces, composeWithDevTools())

export default store;