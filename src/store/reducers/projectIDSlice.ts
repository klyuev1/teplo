import { createSlice } from '@reduxjs/toolkit';

const projectIDSlice = createSlice({
  name: 'projectID',
  initialState: '',
  reducers: {
    setProjectID(state, action) {
      return action.payload;
    }
  }
});

export const { setProjectID } = projectIDSlice.actions;
export default projectIDSlice.reducer;
