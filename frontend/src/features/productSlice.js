import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetailsItems: [],
};

const productSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    goToProductDetails(state, action) {
      state.productDetailsItems.push(action.payload);
      // localStorage.setItem("productDetailsItems", JSON.stringify(state.productDetailsItems));
    },
  },
});
export const { goToProductDetails } = productSlice.actions;

export default productSlice.reducer;
