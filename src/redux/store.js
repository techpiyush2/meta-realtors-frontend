import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { bayutApi } from "./services/bayut";
import { blogApiSlice } from "./services/blogSlice";
import { userApiSlice } from "./services/userSlice";

const store = configureStore({
  reducer: {
    [bayutApi.reducerPath]: bayutApi.reducer,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bayutApi.middleware,
      blogApiSlice.middleware,
      userApiSlice.middleware
    ),
});

export default store;
