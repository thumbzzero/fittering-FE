import React from 'react';
import Link from 'next/link';
import { SignupForm } from '../../components/Form/SignupForm';
import logo from '/public/Fittering_logo.png';
import Image from 'next/image';

type Props = {};

function SignUpPage(props: Props) {
  return (
    <div className="flex flex-col text-center mt-8 justify-center w-[29%] ml-auto mr-auto">
      <div className="mb-4 p-10 border">
        <h1 className="text-3xl font-bold">
          <Image className="w-1/3 block m-auto mt-6" src={logo} alt="Google" />
        </h1>
        <SignupForm />
      </div>
      <div className="border p-6">
        계정이 있으신가요?{' '}
        <Link className="text-main-color font-bold" href="/login">
          로그인
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
