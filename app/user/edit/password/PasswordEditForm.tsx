'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const divStyle = 'w-full my-4';
const infoTypeLabelStyle = 'block text-lg my-2';
const inputStyle = 'w-full md:w-1/2 border rounded-lg p-2';
const birthDateInputStyle =
  'w-2/3 lg:w-4/5 lg: border rounded-lg p-2 text-center md:text-right';

export const PasswordEditForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const router = useRouter();

  const handleCurrentPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSaveButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 저장 코드

    router.replace('/user/edit');
  };

  return (
    <form className="w-11/12 md:w-3/4 mx-auto md:ml-0">
      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="currentPassword">
          현재 비밀번호
        </label>
        <input
          className={inputStyle}
          type="password"
          id="currentPassword"
          minLength={8}
          maxLength={15}
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
        />
      </div>
      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="newPassword">
          새 비밀번호
        </label>
        <input
          className={inputStyle}
          type="password"
          id="newPassword"
          minLength={8}
          maxLength={15}
          value={newPassword}
          onChange={handleNewPasswordChange}
        />
      </div>
      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="passwordConfirm">
          새 비밀번호 확인
        </label>
        <input
          className={inputStyle}
          type="password"
          id="passwordConfirm"
          minLength={8}
          maxLength={15}
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
      </div>
      <div className="relative mt-16 w-full md:w-1/2">
        <button
          className="text-xs md:text-base absolute left-[50%] translate-x-[-50%] rounded-3xl px-4 py-2 bg-[#87AB4E] text-[white] font-bold border-none"
          onClick={handleSaveButtonClick}
        >
          저장
        </button>
      </div>
    </form>
  );
};
