import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isCreateProjectPopupOpen: boolean;
  isCreateFacadePopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateProjectPopupOpen: false,
  isCreateFacadePopupOpen: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openCreateProjectPopup(state) {
      state.isCreateProjectPopupOpen = true;
    },
    closeCreateProjectPopup(state) {
      state.isCreateProjectPopupOpen = false;
    },
    openCreateFacadePopup(state) {
      state.isCreateFacadePopupOpen = true;
    },
    closeCreateFacadePopup(state) {
      state.isCreateFacadePopupOpen = false;
    },
  },
});

export const { openCreateProjectPopup, closeCreateProjectPopup, openCreateFacadePopup, closeCreateFacadePopup } = popupSlice.actions;
export default popupSlice.reducer;