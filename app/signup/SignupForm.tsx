'use client';

import { useState } from 'react';

export const SignupForm = () => {
  const [gender, setGender] = useState('-');
  const onGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  return (
    <form className="mt-12">
      <input
        className="block border w-full p-2 rounded-lg my-2"
        type="email"
        placeholder="이메일"
        maxLength={64}
        required
      />
      <input
        className="block border w-full p-2 rounded-lg my-2"
        type="text"
        placeholder="닉네임"
        maxLength={10}
        required
      />
      <div className="w-full my-2">
        <ul className="w-full box-border list-none block">
          <li className="w-1/2 rounded-l-xl inline-block list-none">
            <input
              className="absolute w-full list-none appearance-none"
              type="radio"
              name="gender"
              id="M"
              value="M"
              onChange={onGenderChange}
              required
            />
            <label
              className={
                (gender === 'M'
                  ? 'text-[#87AB4E] font-bold border-[1.5px] border-[#87AB4E]'
                  : gender === 'F'
                  ? 'text-[#9ca3af] border border-r-0'
                  : 'text-[#9ca3af] border') +
                ' block relative box-border w-full p-2 rounded-l-lg'
              }
              htmlFor="M"
            >
              남성
            </label>
          </li>
          <li className="w-1/2 inline-block list-none">
            <input
              className="absolute list-none appearance-none"
              type="radio"
              name="gender"
              id="F"
              value="F"
              onChange={onGenderChange}
            />
            <label
              className={
                (gender === 'F'
                  ? 'text-[#87AB4E] font-bold border-[1.5px] border-[#87AB4E]'
                  : 'text-[#9ca3af] border border-l-0') +
                ' block relative box-border w-full p-2 rounded-r-lg'
              }
              htmlFor="F"
            >
              여성
            </label>
          </li>
        </ul>
      </div>
      <input
        className="block border w-full p-2 rounded-lg my-2"
        type="text"
        placeholder="생년월일(8자리 입력)"
        minLength={8}
        maxLength={8}
        required
      />
      <input
        className="block border w-full p-2 rounded-lg my-2"
        type="password"
        placeholder="비밀번호"
        minLength={8}
        maxLength={15}
        required
      />
      <input
        className="block border w-full p-2 rounded-lg my-2"
        type="password"
        placeholder="비밀번호 확인"
        minLength={8}
        maxLength={15}
        required
      />
      <button
        className="bg-[#87AB4E] w-full text-white p-2 rounded-lg font-bold my-2 disabled:opacity-75"
        disabled
      >
        회원가입
      </button>
    </form>
  );
};
