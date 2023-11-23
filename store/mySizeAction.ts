import { getMySize } from '@/service/mysize';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { mySizeActions } from '@/store/mySizeSlice';

export const fetchMySize = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const mySize = await getMySize();
      return mySize;
    };
    const mySize = await sendRequest();
    dispatch(mySizeActions.setMySize(mySize));
  };
};
