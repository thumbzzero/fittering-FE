import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LoginForm } from '@/components/Form/LoginForm';
import { SocialLogin } from '@/components/Form/SocialLogin';
import phone from '/public/iPhone 14 Pro - Space Black - Portrait.png';
import logo from '/public/Fittering_logo.png';
import example from '/public/example.png';
import SocialLoginRedirect from '@/components/Redirect/SocialLoginRedirect';

type Props = {};

function LoginPage(props: Props) {
  return (
    <div className="flex flex-grow gap-12 text-center justify-center items-center min-h-[calc(100vh-1rem)]">
      <div
        className="flex-1 relative max-w-[330px] [@media(max-width:900px)]:hidden "
        aria-hidden={true}
      >
        <Image
          className="absolute top-[50%] translate-y-[-50%] z-10"
          src={phone}
          alt=""
        />
        <Image
          className="absolute top-[50%] translate-y-[-50%] z-0 scale-[96%] px-[0.83rem]"
          src={example}
          alt=""
        />
      </div>

      <div className="flex-1 max-w-[400px]">
        <div className="border mb-4 p-10 [@media(max-width:400px)]:border-none">
          <h1 className="text-3xl font-bold mt-6">
            <Image
              className="w-1/2 xs:w-1/3 block m-auto"
              src={logo}
              alt="핏터링 로고"
            />
          </h1>
          <LoginForm />
          <div className="flex my-8">
            <div className="bg-gray-200 grow shrink h-[1px] relative top-2"></div>
            <div className="mx-4 text-custom-gray-500 text-sm">또는</div>
            <div className="bg-gray-200 grow shrink h-[1px]  relative top-2"></div>
          </div>
          <SocialLogin />
          <Link
            className="text-custom-gray-500 text-sm"
            href="/find/password"
            aria-label="비밀번호 재발급으로 이동"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <div className="border p-6 [@media(max-width:400px)]:border-none">
          계정이 없으신가요?{' '}
          <Link
            className="text-main-color font-bold"
            href="/signup"
            aria-label="회원가입으로 이동"
          >
            가입하기
          </Link>
        </div>
      </div>
      <SocialLoginRedirect />
    </div>
  );
}

export default LoginPage;
