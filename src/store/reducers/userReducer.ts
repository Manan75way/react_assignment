import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  age: number;
}

const initialState: UserState = {
  name: "Ram",
  email: "Ram@gmail.com",
  age: 99999,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
      return state;
    },
    deleteUser: (state, action: PayloadAction<UserState>) => {
      state = initialState;
      return state;
    },
  },
});

export const { registerUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
