import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FunctionComponent } from 'react';

interface infoTooltipState {
    isInfoTooltipOpen: boolean,
    titleInfo: string,
    iconInfo: FunctionComponent<React.SVGAttributes<SVGElement>> | ''
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
  }
});

export const { openInfoTooltipFacade, closeInfoTooltipFacade } = infoTooltipSlice.actions;
export default infoTooltipSlice.reducer;