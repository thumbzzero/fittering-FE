'use client';

import { editPassword } from '@/service/user';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const divStyle = 'my-4 inline-block w-full md:w-3/5';
const infoTypeLabelStyle = 'block my-2';
const inputStyle = 'w-full border rounded-lg px-2 py-2.5 block mx-auto';

export const PasswordEditForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isPasswordValid = passwordRegExp.test(newPassword);

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

  useEffect(() => {
    setIsFormValid(
      currentPassword.length > 0 &&
        newPassword.length > 0 &&
        isPasswordValid &&
        passwordConfirm.length > 0 &&
        newPassword === passwordConfirm
    );
  }, [currentPassword, newPassword, passwordConfirm, isPasswordValid]);

  const handleSaveButtonClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await editPassword(currentPassword, newPassword);
    if (response.ok) {
      window.alert('비밀번호가 변경되었습니다.');
      router.replace('/user/edit');
    } else {
      window.alert('현재 비밀번호 인증에 실패하였습니다.');
    }
  };

  return (
    <form
      onSubmit={handleSaveButtonClick}
      className="w-full flex flex-col items-center justify-center md:mt-6"
    >
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
          <span
            className={
              isPasswordValid || newPassword.length === 0
                ? 'hidden'
                : 'ml-4 text-red-500 text-xs'
            }
          >
            ※ 비밀번호: 8~15자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.
          </span>
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
          <span
            className={
              newPassword === passwordConfirm || passwordConfirm.length === 0
                ? 'hidden'
                : 'ml-4 text-red-500 text-xs'
            }
          >
            ※ 비밀번호를 확인해주세요.
          </span>
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
          className="text-xs md:text-base absolute left-[50%] translate-x-[-50%] rounded-3xl px-4 py-2 bg-main-color text-[white] font-bold border-none disabled:opacity-70"
          disabled={!isFormValid}
        >
          저장
        </button>
      </div>
    </form>
  );
};
