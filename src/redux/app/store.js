"use client";
const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  cart: createReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
