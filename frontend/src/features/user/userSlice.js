import { createSlice } from "@reduxjs/toolkit";
import { auth, googleProvider } from "../../firebase";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log("SET USER");
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const googleLogin = () => (dispatch) => {
  console.log("GOOGLE LOGIN");
  auth.signInWithPopup(googleProvider).catch((error) => {
    console.log("Errore nel login");
  });
};

export const credentialsLogin = () => (dispatch) => {
  console.log("Credentials LOGIN");
};

export const logout = () => (dispatch) => {
  console.log("LOGOUT");
  auth.signOut().catch((error) => {
    console.log("Errore nel logout");
  });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
