'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/service/auth';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginFormValid, setIsLoginFormValid] = useState(false);

  const router = useRouter();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsLoginFormValid(true);
    } else {
      setIsLoginFormValid(false);
    }
  }, [email, password]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login({ email, password });
    if (response.ok) {
      router.replace('/');
    } else {
      window.alert('이메일 또는 비밀번호를 확인해주세요.');
    }
  };

  return (
    <form onSubmit={handleLogin} className="mt-12">
      <input
        className={
          (email.length > 0 ? 'border-[1.5px] border-main-color ' : '') +
          'block border w-full p-2 rounded-lg'
        }
        id="emailInput"
        type="text"
        placeholder="이메일"
        onChange={onEmailChange}
        required
        aria-required={true}
      />
      <input
        className={
          (password.length > 0 ? 'border-[1.5px] border-main-color ' : '') +
          'block border w-full p-2 rounded-lg my-2'
        }
        type="password"
        placeholder="비밀번호"
        onChange={onPasswordChange}
        required
        aria-required={true}
      />
      <button
        className="bg-main-color w-full text-white p-2 rounded-lg font-bold my-4 disabled:opacity-70"
        disabled={isLoginFormValid ? false : true}
      >
        로그인
      </button>
    </form>
  );
};
