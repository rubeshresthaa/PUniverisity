import { configureStore } from "@reduxjs/toolkit";
import { blogApi, contactApi, imageApi } from "./apiSlice";


export const store = configureStore({
  reducer: {  
    [contactApi.reducerPath]:contactApi.reducer,
    [blogApi.reducerPath]:blogApi.reducer,
    [imageApi.reducerPath]:imageApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      contactApi.middleware,
      blogApi.middleware,
      imageApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
