import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiProjectSlice } from "./api/apiProjectSlice";
import popupReducer from './reducers/popupSlice';
import projectIDReducer from './reducers/projectIDSlice';
import { apiRoomSlice } from "./api/apiRoomSlice";
import selectedRoomSlice from "./reducers/selectedRoomSlice";
import { apiFacadeSlice } from "./api/apiFacadeSlice";
import selectedFacadeSlice from "./reducers/selectedFacadeSlice";
import infoTooltipSlice from "./reducers/infoTooltipSlice";
import { apiProfileSlice } from "./api/apiProfileSlice";
import authReducer from "./reducers/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  projectID: projectIDReducer,
  popup: popupReducer,
  selectedRoom: selectedRoomSlice,
  [apiProjectSlice.reducerPath]: apiProjectSlice.reducer,
  [apiRoomSlice.reducerPath]: apiRoomSlice.reducer,
  selectedFacade: selectedFacadeSlice,
  infoTooltip: infoTooltipSlice,
  [apiFacadeSlice.reducerPath]: apiFacadeSlice.reducer,
  [apiProfileSlice.reducerPath]: apiProfileSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProjectSlice.middleware, apiRoomSlice.middleware, apiFacadeSlice.middleware, apiProfileSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];