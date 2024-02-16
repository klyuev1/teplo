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
      state.isCreateFacadePopupOpen = false;

    },
    closeCreateProjectPopup(state) {
      state.isCreateProjectPopupOpen = false;
      state.isCreateFacadePopupOpen = false;

    },
    openCreateFacadePopup(state) {
      state.isCreateFacadePopupOpen = true;
      state.isCreateProjectPopupOpen = false;
    },
    closeCreateFacadePopup(state) {
      state.isCreateFacadePopupOpen = false;
      state.isCreateProjectPopupOpen = false;
    },
  },
});

export const { openCreateProjectPopup, closeCreateProjectPopup, openCreateFacadePopup, closeCreateFacadePopup } = popupSlice.actions;
export default popupSlice.reducer;