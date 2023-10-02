import { MyPage } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

export const myPageSlice = createSlice({
  name: 'myPage',
  initialState: {} as MyPage,
  reducers: {
    setMyPage(state, action) {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.gender = action.payload.gender;
      state.year = action.payload.year;
      state.month = action.payload.month;
      state.day = action.payload.day;
    },
  },
});

export const myPageActions = myPageSlice.actions;

export default myPageSlice.reducer;
