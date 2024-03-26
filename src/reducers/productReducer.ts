import { IProduct } from "@/types/IProducts";

interface ProductState {
  data: IProduct | null;
}

const initialState: ProductState = {
  data: null,
};

type ProductAction = {
  type: "PRODUCT_ACTION";
  payload: IProduct;
};

const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "PRODUCT_ACTION":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
