import { configureStore } from '@reduxjs/toolkit';
import myPage from './myPageSlice';

export const store = configureStore({
  reducer: {
    myPage,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
