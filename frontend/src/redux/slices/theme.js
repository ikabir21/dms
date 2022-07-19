import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkTheme: localStorage.getItem("darkTheme")
      ? JSON.parse(localStorage.getItem("darkTheme"))
      : false
  },
  reducers: {
    toogleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    }
  }
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
