import React from 'react';
import Link from 'next/link';
import { SignupForm } from './SignupForm';
import logo from '/public/logo.svg';
import Image from 'next/image';

type Props = {};

function SignUpPage(props: Props) {
  return (
    <div className="flex flex-col text-center mt-8 justify-center w-[27%] ml-auto mr-auto">
      <div className="mb-4 p-10 border">
        {/* <h1 className="text-3xl font-bold">Fittering</h1> */}
        <h1 className="text-3xl font-bold">
          <Image className="w-1/2 block m-auto" src={logo} alt="Google" />
        </h1>
        <SignupForm />
      </div>
      <div className="border p-6">
        계정이 있으신가요?{' '}
        <Link className="text-[#87AB4E] font-bold" href="/login">
          로그인
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;
