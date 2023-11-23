import { getMyPage } from '@/service/user';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { myPageActions } from '@/store/myPageSlice';

export const fetchMyPage = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const sendRequest = async () => {
      const myPage = await getMyPage();
      return myPage;
    };
    const myPage = await sendRequest();
    dispatch(myPageActions.setMyPage(myPage));
  };
};
