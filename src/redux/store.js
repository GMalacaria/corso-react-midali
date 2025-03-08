import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { citiesReducer } from "./citiesSlice";
import { postsReducer } from "./postsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cities: citiesReducer,
    posts: postsReducer,
  },
});
