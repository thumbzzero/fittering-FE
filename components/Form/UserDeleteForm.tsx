'use client';

import { useState } from 'react';

const divStyle = 'my-4 inline-block w-full md:w-3/5';
const infoTypeLabelStyle = 'block my-2';
const inputStyle = 'w-full border rounded-lg px-2 py-2.5 block mx-auto';

export const UserDeleteForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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

  const handleDeleteButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {};

  return (
    <form className="w-full flex flex-col items-center justify-center md:mt-6">
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
          className="text-xs md:text-base absolute left-[50%] translate-x-[-50%] rounded-3xl px-4 py-2 bg-main-color text-[white] font-bold border-none"
          onClick={handleDeleteButtonClick}
        >
          탈퇴
        </button>
      </div>
    </form>
  );
};
