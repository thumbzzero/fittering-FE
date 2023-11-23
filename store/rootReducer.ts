import { combineReducers } from '@reduxjs/toolkit';
import myPageReducer from '@/store/myPageSlice';
import mySizeReducer from '@/store/mySizeSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['myPage', 'mySize'],
};

const rootReducer = combineReducers({
  myPage: myPageReducer,
  mySize: mySizeReducer,
});

export default persistReducer(persistConfig, rootReducer);
