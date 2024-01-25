import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  token: string;
}

const initialState: UserState = {
  name: "",
  email: "",
  token: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      return state;
    },
    deleteUser: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { userLogin, deleteUser } = userSlice.actions;
export default userSlice.reducer;
