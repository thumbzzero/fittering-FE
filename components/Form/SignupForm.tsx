'use client';

import { signup } from '@/service/auth';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('-');
  const [date, setDate] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isSignupFormValid, setIsSignupFormValid] = useState(false);

  const router = useRouter();

  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(4, 6));
  const day = parseInt(date.substring(6, 8));
  const birthDate = new Date(year + '-' + month + '-' + day);
  const fourteenYearsAgo = new Date();
  fourteenYearsAgo.setFullYear(fourteenYearsAgo.getFullYear() - 14);

  const isEmailValid = emailRegExp.test(email);
  const isUsernameValid = username.length > 0;
  const isGenderValid = gender === 'F' || gender === 'M';
  const isAgeValid = year >= 1950 && birthDate <= fourteenYearsAgo;
  const isDateValid = !isNaN(birthDate.getTime());
  const isPasswordValid = passwordRegExp.test(password);
  const isPasswordConfirmValid =
    passwordConfirm.length > 0 && password === passwordConfirm;

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const onBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onPasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await signup({
      email,
      username,
      gender,
      year,
      month,
      day,
      password,
    });
    if (response.status === 201) {
      window.alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      router.replace('/login');
    } else {
      window.alert('회원가입 실패');
    }
  };

  useEffect(() => {
    if (
      isEmailValid &&
      isUsernameValid &&
      isGenderValid &&
      isAgeValid &&
      isDateValid &&
      isPasswordValid &&
      isPasswordConfirmValid
    ) {
      setIsSignupFormValid(true);
    } else {
      setIsSignupFormValid(false);
    }
  }, [
    isEmailValid,
    isUsernameValid,
    isGenderValid,
    isAgeValid,
    isDateValid,
    isPasswordValid,
    isPasswordConfirmValid,
  ]);

  return (
    <form onSubmit={handleSignup} className="mt-12">
      <input
        className={
          (isEmailValid
            ? 'border-[1.5px] border-main-color '
            : email.length > 0
            ? 'border-[1.5px] border-red-500 '
            : '') + 'block border w-full p-2 rounded-lg my-2'
        }
        type="email"
        placeholder="이메일"
        maxLength={64}
        onChange={onEmailChange}
        required
      />
      <input
        className={
          (isUsernameValid ? 'border-[1.5px] border-main-color ' : '') +
          'block border w-full p-2 rounded-lg my-2'
        }
        type="text"
        placeholder="닉네임"
        minLength={1}
        maxLength={20}
        onChange={onUsernameChange}
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
                  ? 'text-main-color font-bold border-[1.5px] border-main-color'
                  : gender === 'F'
                  ? 'text-custom-gray-700 border border-r-0'
                  : 'text-custom-gray-700 border') +
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
                  ? 'text-main-color font-bold border-[1.5px] border-main-color'
                  : 'text-custom-gray-700 border border-l-0') +
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
        className={
          (isAgeValid && isDateValid
            ? 'border-[1.5px] border-main-color '
            : date.length > 0
            ? 'border-[1.5px] border-red-500 '
            : '') + 'block border w-full p-2 rounded-lg my-2'
        }
        type="text"
        placeholder="생년월일(8자리 입력)"
        minLength={8}
        maxLength={8}
        onChange={onBirthDateChange}
        required
      />
      <input
        className={
          (isPasswordValid
            ? 'border-[1.5px] border-main-color '
            : password.length > 0
            ? 'border-[1.5px] border-red-500 '
            : '') + 'block border w-full p-2 rounded-lg my-2'
        }
        type="password"
        placeholder="비밀번호"
        minLength={8}
        maxLength={15}
        onChange={onPasswordChange}
        required
      />
      <input
        className={
          (isPasswordConfirmValid
            ? 'border-[1.5px] border-main-color '
            : passwordConfirm.length > 0
            ? 'border-[1.5px] border-red-500 '
            : '') + 'block border w-full p-2 rounded-lg my-2'
        }
        type="password"
        placeholder="비밀번호 확인"
        minLength={8}
        maxLength={15}
        onChange={onPasswordConfirmChange}
        required
      />
      <button
        className="bg-main-color w-full text-white p-2 rounded-lg font-bold my-2 disabled:opacity-75"
        disabled={isSignupFormValid ? false : true}
      >
        회원가입
      </button>
      {!isPasswordValid && password.length > 0 ? (
        <p className="mt-4 text-red-500 text-xs">
          비밀번호: 8~15자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.
        </p>
      ) : null}
    </form>
  );
};
