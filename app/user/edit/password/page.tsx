import React from 'react';
import { PasswordEditForm } from './PasswordEditForm';

type Props = {};

function PasswordEditPage(props: Props) {
  return (
    <div>
      <h1 className='text-2xl font-bold'>비밀번호 수정</h1>
      <PasswordEditForm />
    </div>
  );
}

export default PasswordEditPage;
