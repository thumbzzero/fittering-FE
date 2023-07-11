'use client';
import { useEffect, useState } from 'react';
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginFormValid, setIsLoginFormValid] = useState(false);

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

  return (
    <form className="mt-12">
      <input
        className={
          (email.length > 0 ? 'border-[1.5px] border-[#87AB4E] ' : '') +
          'block border w-full p-2 rounded-lg'
        }
        id="emailInput"
        type="text"
        placeholder="이메일"
        onChange={onEmailChange}
        required
      />
      <input
        className={
          (password.length > 0 ? 'border-[1.5px] border-[#87AB4E] ' : '') +
          'block border w-full p-2 rounded-lg my-2'
        }
        type="password"
        placeholder="비밀번호"
        onChange={onPasswordChange}
        required
      />
      <button
        className="bg-[#87AB4E] w-full text-white p-2 rounded-lg font-bold my-4 disabled:opacity-70"
        disabled={isLoginFormValid ? false : true}
      >
        로그인
      </button>
    </form>
  );
};
