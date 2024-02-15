import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiProjectSlice } from "./api/apiProjectSlice";
import popupReducer from './reducers/popupSlice';

export const rootReducer = combineReducers({
  popup: popupReducer,
  [apiProjectSlice.reducerPath]: apiProjectSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProjectSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];