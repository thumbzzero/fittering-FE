import React from 'react';
import { UserDeleteForm } from '../../../../components/Form/UserDeleteForm';
import MyPageSection from '@/components/MyPage/MyPageSection';

type Props = {};

function UserDeletePage(props: Props) {
  return (
    <div>
      <MyPageSection sectionName='회원 탈퇴' displayStyle='' />
      <UserDeleteForm />
    </div>
  );
}

export default UserDeletePage;
