import { combineReducers } from "redux";

import { IProduct } from "@/types/IProducts";
import productReducer from "./productReducer";
import setProductReducer from "./setProductReducer";

export interface RootState {
  product: IProduct;
  cart: IProduct;
}

const rootReducer = combineReducers({
  product: productReducer,
  cart: setProductReducer,
});

export default rootReducer;
