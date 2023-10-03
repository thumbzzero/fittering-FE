import { combineReducers } from '@reduxjs/toolkit';
import myPageReducer from './myPageSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['myPage'],
};

const rootReducer = combineReducers({
  myPage: myPageReducer,
});

export default persistReducer(persistConfig, rootReducer);
