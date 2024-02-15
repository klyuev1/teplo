import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isCreateProjectPopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateProjectPopupOpen: false,
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
  },
});

export const { openCreateProjectPopup, closeCreateProjectPopup } = popupSlice.actions;
export default popupSlice.reducer;