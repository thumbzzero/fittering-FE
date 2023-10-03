import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/lib/persistStore';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer
});

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
