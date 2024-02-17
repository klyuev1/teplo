import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiProjectSlice } from "./api/apiProjectSlice";
import popupReducer from './reducers/popupSlice';
import { apiFacadeSlice } from "./api/apiFacadeSlice";
import selectedFacadeSlice from "./reducers/selectedFacadeSlice";
import infoTooltipSlice from "./reducers/infoTooltipSlice";
import { apiProfileSlice } from "./api/apiProfileSlice";

export const rootReducer = combineReducers({
  popup: popupReducer,
  selectedFacade: selectedFacadeSlice,
  infoTooltip: infoTooltipSlice,
  [apiProjectSlice.reducerPath]: apiProjectSlice.reducer,
  [apiFacadeSlice.reducerPath]: apiFacadeSlice.reducer,
  [apiProfileSlice.reducerPath]: apiProfileSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProjectSlice.middleware, apiFacadeSlice.middleware, apiProfileSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];