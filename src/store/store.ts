import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import popupReducer from './reducers/popupSlice';

export const rootReducer = combineReducers({
  popup: popupReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];