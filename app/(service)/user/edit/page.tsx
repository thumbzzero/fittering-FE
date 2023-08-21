import MyPageSection from '@/components/MyPage/MyPageSection';
import Section from '@/components/Section';
import React from 'react';
import { UserEditForm } from '../../../../components/Form/UserEditForm';

type Props = {};

function UserEditPage(props: Props) {
  return (
    <div>
      <MyPageSection sectionName="회원 정보 수정" displayStyle="" />
      <UserEditForm />
    </div>
  );
}

export default UserEditPage;
