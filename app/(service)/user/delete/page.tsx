import React from 'react';
import { UserDeleteForm } from '../../../../components/Form/UserDeleteForm';

type Props = {};

function UserDeletePage(props: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold">회원 탈퇴</h1>
      <UserDeleteForm />
    </div>
  );
}

export default UserDeletePage;
