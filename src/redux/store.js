import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducers from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middleware/cartCounter";
import thunk from "redux-thunk";

//composeWithDevTools()
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(cartCounter, thunk, logger))
);

export default store;
