import { IProduct } from "@/types/IProducts";

interface CartState {
  items: IProduct[];
}

const initialState: CartState = {
  items: [],
};

type CartAction =
  | { type: "ADD_PRODUCT"; payload: IProduct }
  | { type: "REMOVE_PRODUCT"; payload: string };

const cartReducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.data.titulo !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
