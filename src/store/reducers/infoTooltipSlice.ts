import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FunctionComponent } from 'react';

interface infoTooltipState {
    isInfoTooltipOpen: boolean,
    titleInfo: string,
    iconInfo: FunctionComponent<React.SVGAttributes<SVGElement>> | '',
}

const initialState: infoTooltipState = {
    isInfoTooltipOpen: false,
    titleInfo: '',
    iconInfo: '',
};

const infoTooltipSlice = createSlice({
  name: 'infoTooltip',
  initialState,
  reducers: {
    openInfoTooltipFacade(state, action: PayloadAction<string>) {
        state.isInfoTooltipOpen = true;
        state.titleInfo = action.payload;
    },
    closeInfoTooltipFacade(state) {
        state.isInfoTooltipOpen = false;
        state.titleInfo = '';
    },
    
    openInfoTooltipLogin(state, action: PayloadAction<string>) {
        state.isInfoTooltipOpen = true;
        state.titleInfo = action.payload;
    },
    closeInfoTooltipLogin(state) {
        state.isInfoTooltipOpen = false;
        state.titleInfo = '';
    },
    
    openInfoTooltipRegist(state, action: PayloadAction<string>) {
        state.isInfoTooltipOpen = true;
        state.titleInfo = action.payload;
    },
    closeInfoTooltipRegist(state) {
        state.isInfoTooltipOpen = false;
        state.titleInfo = '';
    },
    
    openInfoTooltipProfile(state, action: PayloadAction<string>) {
        state.isInfoTooltipOpen = true;
        state.titleInfo = action.payload;
    },
    closeInfoTooltipProfile(state) {
        state.isInfoTooltipOpen = false;
        state.titleInfo = '';
    },
  }
});

export const { 
  openInfoTooltipFacade,
  closeInfoTooltipFacade, 
  openInfoTooltipLogin, 
  closeInfoTooltipLogin,
  openInfoTooltipRegist,
  closeInfoTooltipRegist,
  openInfoTooltipProfile,
  closeInfoTooltipProfile

} = infoTooltipSlice.actions;

export default infoTooltipSlice.reducer;