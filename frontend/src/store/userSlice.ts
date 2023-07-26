import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./Model";

const initialState: UserState = {
  userData: null,
  isAuth: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default userSlice.reducer;
