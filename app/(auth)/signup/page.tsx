import React from 'react';
import Link from 'next/link';
import { SignupForm } from '@/components/Form/SignupForm';
import logo from '/public/Fittering_logo.png';
import Image from 'next/image';

type Props = {};

function SignUpPage(props: Props) {
  return (
    <div className="flex flex-grow flex-col text-center justify-center min-h-[calc(100vh-1rem)] max-w-[400px] ml-auto mr-auto">
      <div className="mb-4 p-4 xs:p-10 border [@media(max-width:400px)]:border-none">
        <h1 className="text-3xl font-bold">
          <Image
            className="w-1/3 block m-auto mt-6"
            src={logo}
            alt="핏터링 로고"
          />
        </h1>
        <SignupForm />
      </div>
      <div className="border p-6 [@media(max-width:400px)]:border-none">
        계정이 있으신가요?{' '}
        <Link
          className="text-main-color font-bold"
          href="/login"
          aria-label="로그인 페이지로 이동"
        >
          로그인
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
