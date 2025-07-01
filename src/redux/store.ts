import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import adminReducer from "./features/adminSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    theme: themeReducer,
  },
});

// Export RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
