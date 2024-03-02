import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Room } from '../../models/models';

interface selectedRoomState {
  selectedRoom: Room,
}

const initialState: selectedRoomState = {
  selectedRoom: {
    id: '',
    number: '',
    name: '',
    height: 0,
    width: 0,
    areaWall: 0,
    areaWindow: 0,
    areaRoom: 0,
    numberFacade: '',
    heatLoss: 0,
  }
};

const selectedRoomSlice = createSlice({
  name: 'selectedRoom',
  initialState,
  reducers: {
    openSelectedRoom(state, action: PayloadAction<Room>) {
      state.selectedRoom = action.payload;  
    },
    closeSelectedRoom(state) {
      state.selectedRoom = { 
        id: '', number: '', name: '', height: 0, width: 0, areaWall: 0, areaWindow: 0, areaRoom: 0, numberFacade: '', heatLoss: 0, 
      };  
    }
  }
});

export const { openSelectedRoom, closeSelectedRoom } = selectedRoomSlice.actions;
export default selectedRoomSlice.reducer;