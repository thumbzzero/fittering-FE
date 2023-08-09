import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LoginForm } from '@/components/Form/LoginForm';
import { SocialLogin } from '@/components/Form/SocialLogin';
import phone from '/public/iPhone 14 Pro - Space Black - Portrait.png';
import logo from '/public/Fittering_logo.png';

type Props = {};

function LoginPage(props: Props) {
  return (
    <div className="flex text-center mt-8 px-72 justify-center items-center max-h-min">
      <div className="md:max-xl:hidden flex-1">
        <Image className="p-16" src={phone} alt="phone" />
      </div>
      <div className="flex-1">
        <div className="border mb-4 p-10">
          <h1 className="text-3xl font-bold mt-6">
            <Image className="w-1/3 block m-auto" src={logo} alt="Google" />
          </h1>
          <LoginForm />
          <div className="flex my-8">
            <div className="bg-gray-200 grow shrink h-[1px] relative top-2"></div>
            <div className="mx-4 text-custom-gray-500 text-sm">또는</div>
            <div className="bg-gray-200 grow shrink h-[1px]  relative top-2"></div>
          </div>
          <SocialLogin />
          <Link className="text-custom-gray-500 text-sm" href="">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <div className="border p-6">
          계정이 없으신가요?{' '}
          <Link className="text-main-color font-bold" href="/signup">
            가입하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
