import React from 'react';
import { UserEditForm } from '../../../../components/Form/UserEditForm';

type Props = {};

function UserEditPage(props: Props) {
  return (
    <div>
      <h1 className='text-2xl font-bold'>회원 정보 수정</h1>
      <UserEditForm />
    </div>
  );
}

export default UserEditPage;
