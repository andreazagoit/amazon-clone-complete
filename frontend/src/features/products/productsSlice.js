import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      console.log("PRODUCTS", action.payload);
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
  },
});

export const { setProducts, addToCart, removeFromCart } = productsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const getProducts = () => (dispatch) => {
  Axios.get("http://localhost:5000")
    .then((response) => {
      console.log(response.data);
      dispatch(setProducts(response.data));
    })
    .catch((error) => {
      console.log("error");
    });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectProducts = (state) => state.products.products;
export const selectCart = (state) => state.products.cart;

export default productsSlice.reducer;
