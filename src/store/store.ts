import { configureStore } from "@reduxjs/toolkit";
import {
  authApi,
  blogApi,
  collegeApi,
  contactApi,
  imageApi,
  programApi,
} from "./apiSlice";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [imageApi.reducerPath]: imageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [programApi.reducerPath]: programApi.reducer,
    [collegeApi.reducerPath]: collegeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      contactApi.middleware,
      blogApi.middleware,
      imageApi.middleware,
      programApi.middleware,
      collegeApi.middleware,
      authApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
