import FindPasswordForm from '@/components/Form/FindPasswordForm';
import Image from 'next/image';
import React from 'react';
import logo from '/public/Fittering_logo.png';

type Props = {};

function FindPasswordPage(props: Props) {
  return (
    <div className="flex flex-grow flex-col text-center pt-[5rem] px-4 min-h-[calc(100vh-1rem)] max-w-[400px] ml-auto mr-auto">
      <h1 className="text-3xl font-bold">
        <Image
          className="w-1/3 block m-auto mt-6"
          src={logo}
          alt="핏터링 로고"
        />
      </h1>
      <h2 className="mt-4 mb-12 text-xs sm:text-base md:text-lg font-semibold">
        비밀번호를 찾고자하는 이메일을 입력해주세요.
      </h2>
      <FindPasswordForm />
    </div>
  );
}

export default FindPasswordPage;
