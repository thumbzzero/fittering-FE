import React from 'react';
import { UserDeleteForm } from '../../../../components/Form/UserDeleteForm';
import LineSection from '@/components/LineSection';

type Props = {};

function UserDeletePage(props: Props) {
  return (
    <div>
      <LineSection sectionName='회원 탈퇴' displayStyle='' />
      <UserDeleteForm />
    </div>
  );
}

export default UserDeletePage;
