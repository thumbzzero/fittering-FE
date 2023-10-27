'use client';

import { findPassword, isEmailValid } from '@/service/auth';
import { useState } from 'react';

export default function FindPasswordForm() {
  const [email, setEmail] = useState('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFindPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (await isEmailValid(email)) {
      const response = await findPassword(email);
      if (response.status === 200) {
        window.alert('이메일로 임시 비밀번호를 발송하였습니다.');
      } else if (response.status === 400) {
        window.alert('비밀번호 찾기는 1시간에 한 번 가능합니다.');
      } else {
        window.alert('비밀번호 재발급에 실패하였습니다.');
      }
    } else {
      window.alert('일치하는 메일이 없습니다.');
    }
  };

  return (
    <form onSubmit={handleFindPassword}>
      <input
        className="border rounded-lg px-2 py-2.5 block mx-auto w-full text-sm sm:text-base"
        type="email"
        placeholder="이메일을 입력해주세요."
        maxLength={64}
        onChange={onEmailChange}
        required
        aria-required={true}
      />
      <button
        className="bg-main-color w-full text-white p-2 rounded-lg font-bold text-sm sm:text-bases mt-4 disabled:opacity-75"
        disabled={email.length ? false : true}
      >
        비밀번호 재발급
      </button>
    </form>
  );
}
