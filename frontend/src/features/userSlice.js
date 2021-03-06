import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.cartItems = action.payload;
      console.log("success");

      if (state?.user)
        localStorage.setItem("user", JSON.stringify(state?.user));
      // localStorage.setItem("usercartItems", JSON.stringify(state?.cartItems));
    },

    logout: (state, action) => {
      state.user = action.payload;
      if (state?.user)
        localStorage.removeItem("user", JSON.stringify(state?.user));
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;
export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   userName: null,
//   userEmail: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setActiveUser: (state, action) => {
//       state.userName = action.payload.userName;
//       state.userEmail = action.payload.userEmail;
//     },
//     setUserLogOutState: (state, action) => {
//       state.userName = null;
//       state.userEmail = null;
//     },
//   },
// });

// export const { setActiveUser, setUserLogOutState } = userSlice.actions;

// export default userSlice.reducer;
