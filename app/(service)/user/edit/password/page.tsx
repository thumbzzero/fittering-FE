import MyPageSection from '@/components/MyPage/MyPageSection';
import Section from '@/components/Section';
import React from 'react';
import { PasswordEditForm } from '../../../../../components/Form/PasswordEditForm';

type Props = {};

function PasswordEditPage(props: Props) {
  return (
    <div>
      <MyPageSection sectionName='비밀번호 변경' displayStyle='' />
      <PasswordEditForm />
    </div>
  );
}

export default PasswordEditPage;
