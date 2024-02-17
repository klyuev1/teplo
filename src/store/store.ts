import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiProjectSlice } from "./api/apiProjectSlice";
import popupReducer from './reducers/popupSlice';
import projectIDReducer from './reducers/projectIDSlice';
import { apiRoomSlice } from "./api/apiRoomSlice";
import selectedRoomSlice from "./reducers/selectedRoomSlice";

export const rootReducer = combineReducers({
  projectID: projectIDReducer,
  popup: popupReducer,
  selectedRoom: selectedRoomSlice,
  [apiProjectSlice.reducerPath]: apiProjectSlice.reducer,
  [apiRoomSlice.reducerPath]: apiRoomSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProjectSlice.middleware, apiRoomSlice.middleware),
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];