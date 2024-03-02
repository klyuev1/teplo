import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Facade } from '../../models/models';

interface selectedFacadeState {
  selectedFacade: Facade,
}

const initialState: selectedFacadeState = {
  selectedFacade: {
    id: '',
    name: '',
    link: '',
    height: 0,
    width: 0,
    areaWindow: 0,
    areaWall: 0,
  }
};

const selectedFacadeSlice = createSlice({
  name: 'selectedFacade',
  initialState,
  reducers: {
    openSelectedFacade(state, action: PayloadAction<Facade>) {
      state.selectedFacade = action.payload;
    },
    closeSelectedFacade(state) {
      state.selectedFacade = initialState.selectedFacade;
    }
  }
});

export const { openSelectedFacade, closeSelectedFacade } = selectedFacadeSlice.actions;
export default selectedFacadeSlice.reducer;