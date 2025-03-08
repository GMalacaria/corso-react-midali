import { createSlice } from "@reduxjs/toolkit";
import { AllCities } from "../constants/cities";

export const counterCities = createSlice({
  name: "cities",
  initialState: { value: AllCities },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { add } = counterCities.actions;
export const citiesReducer = counterCities.reducer;
