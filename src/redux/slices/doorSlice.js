import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  door: true,
};

const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {
    doorToggle: (state) => {
      state.door = !state.door;
    }
  }
})

export const { doorToggle } = doorSlice.actions;
export default doorSlice.reducer;