import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiProjectSlice } from "./api/apiProjectSlice";
import popupReducer from './reducers/popupSlice';
import { apiFacadeSlice } from "./api/apiFacadeSlice";

export const rootReducer = combineReducers({
  popup: popupReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [apiFacadeSlice.reducerPath]: apiFacadeSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, apiFacadeSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];