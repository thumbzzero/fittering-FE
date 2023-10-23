'use client';

import { useState } from 'react';

export default function FindPasswordForm() {
  const [email, setEmail] = useState('');

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailCheck = async () => {};

  const handleFindPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
