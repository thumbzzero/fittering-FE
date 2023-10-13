import Link from 'next/link';
import Image from 'next/image';
import apple from '/public/Logo - SIWA - Logo-only - White@3x.png';
import google from '/public/google.svg';
import kakao from '/public/kakao.svg';
import { SERVER_DOMAIN } from '@/constants/apis';

export const SocialLogin = () => {
  const LinkStyle = 'cursor-pointer w-8 rounded-full drop-shadow-lg';
  return (
    <div className="flex justify-center gap-8 items-center mb-8">
      <>
        <Link
          className={`${LinkStyle} border-[0.5px] border-custom-gray-100`}
          href={`${SERVER_DOMAIN}/login/oauth/google`}
          aria-label="구글 로그인으로 이동"
        >
          <Image
            className="p-[4px] "
            src={google}
            alt="Google 로고"
            aria-hidden={true}
          />
        </Link>
      </>
      <>
        <Link
          className={LinkStyle}
          href={`${SERVER_DOMAIN}/login/oauth/kakao`}
          aria-label="카카오 로그인으로 이동"
        >
          <Image src={kakao} alt="Kakao 로고" aria-hidden={true} />
        </Link>
      </>
      <>
        <Link
          className={`${LinkStyle} overflow-hidden`}
          href={`${SERVER_DOMAIN}/login/oauth/apple`}
          aria-label="애플 로그인으로 이동"
        >
          <Image
            className="scale-[1.3] translate-y-[0.9px]"
            src={apple}
            alt="Apple 로고"
            aria-hidden={true}
          />
        </Link>
      </>
    </div>
  );
};
