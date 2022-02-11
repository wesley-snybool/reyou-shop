import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const checkListValue: any = [];

export const flipCardCheckSlice = createSlice({
  name: "add_flip_card_check",
  initialState: checkListValue,
  reducers: {
    addFlipCardCheck: (state, { payload }: PayloadAction) => {
      return { ...state, checkListValue: payload };
    },
  },
});

export const { addFlipCardCheck } = flipCardCheckSlice.actions;

export default flipCardCheckSlice.reducer;
