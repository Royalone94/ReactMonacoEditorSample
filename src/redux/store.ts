/* eslint-disable import/no-cycle */
// src/redux/store.ts

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authenticationSlice";

const store = configureStore({
  reducer: combineReducers({
    authentication: authReducer,
  }),
  devTools: {
    trace: process.env.NODE_ENV === "development",
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
