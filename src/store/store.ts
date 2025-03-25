import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(), // ✅ Add blogApi middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
