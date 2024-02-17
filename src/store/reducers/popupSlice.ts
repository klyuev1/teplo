import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  isCreateProjectPopupOpen: boolean;
  isUpdateProjectPopupOpen: boolean;
  isCreateRoomPopupOpen: boolean;
  isCreateFacadePopupOpen: boolean;
}

const initialState: PopupState = {
  isCreateProjectPopupOpen: false,
  isUpdateProjectPopupOpen: false,
  isCreateRoomPopupOpen: false,
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
    openUpdateProjectPopup(state) {
      state.isUpdateProjectPopupOpen = true;
    },
    closeUpdateProjectPopup(state) {
      state.isUpdateProjectPopupOpen = false;
    },
    
    openCreateRoomPopup(state) {
      state.isCreateRoomPopupOpen = true;
    },
    closeCreateRoomPopup(state) {
      state.isCreateRoomPopupOpen = false;
    },
    openCreateFacadePopup(state) {
      state.isCreateFacadePopupOpen = true;
    },
    closeCreateFacadePopup(state) {
      state.isCreateFacadePopupOpen = false;
    },
  },
});

export const { 
  openCreateProjectPopup,
  closeCreateProjectPopup,
  
  openUpdateProjectPopup,
  closeUpdateProjectPopup,

  openCreateRoomPopup,
  closeCreateRoomPopup,

  openCreateFacadePopup,
  closeCreateFacadePopup  

  } = popupSlice.actions;
export default popupSlice.reducer;