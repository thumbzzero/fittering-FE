import { MySize } from '@/service/mysize';
import { createSlice } from '@reduxjs/toolkit';

export const mySizeSlice = createSlice({
  name: 'mySize',
  initialState: {} as MySize,
  reducers: {
    setMySize(state, action) {
      state.height = action.payload.height;
      state.weight = action.payload.weight;
      state.arm = action.payload.arm;
      state.leg = action.payload.leg;
      state.shoulder = action.payload.shoulder;
      state.waist = action.payload.waist;
      state.chest = action.payload.chest;
      state.thigh = action.payload.thigh;
      state.hip = action.payload.hip;
    },
  },
});

export const mySizeActions = mySizeSlice.actions;

export default mySizeSlice.reducer;
