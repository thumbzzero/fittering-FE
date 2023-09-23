'use client';

import { deleteUser } from '@/service/user';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const divStyle = 'my-4 inline-block w-full md:w-3/5';
const infoTypeLabelStyle = 'block my-2';
const inputStyle = 'w-full border rounded-lg px-2 py-2.5 block mx-auto';

export const UserDeleteForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isDeleteFormValid, setIsDeleteFormValid] = useState(false);

  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value);
  };

  useEffect(() => {
    setIsDeleteFormValid(
      email.length > 0 && password.length > 0 && passwordConfirm.length > 0
    );
  }, [email, password, passwordConfirm]);

  const handleUserDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      window.alert('이메일 또는 비밀번호를 확인해주세요.');
      return;
    }
    const response = await deleteUser({ email, password });
    if (response.ok) {
      window.alert('회원탈퇴가 완료되었습니다.');
      localStorage.removeItem('TOKEN');
      router.replace('/login');
    } else {
      window.alert('이메일 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <form
      onSubmit={handleUserDelete}
      className="w-full flex flex-col items-center justify-center md:mt-6"
    >
      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="email">
          이메일
        </label>
        <input
          className={inputStyle}
          type="email"
          id="email"
          maxLength={64}
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="password">
          현재 비밀번호
        </label>
        <input
          className={inputStyle}
          type="password"
          id="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className={divStyle}>
        <label className={infoTypeLabelStyle} htmlFor="passwordConfirm">
          비밀번호 확인
        </label>
        <input
          className={inputStyle}
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
      </div>
      <div className="relative mt-16 w-full md:w-1/2">
        <button
          className="text-xs md:text-base absolute left-[50%] translate-x-[-50%] rounded-3xl px-4 py-2 bg-main-color text-[white] font-bold border-none disabled:opacity-70"
          disabled={!isDeleteFormValid}
        >
          탈퇴
        </button>
      </div>
    </form>
  );
};
