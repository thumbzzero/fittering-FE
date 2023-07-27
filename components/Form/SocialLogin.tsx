import Link from 'next/link';
import Image from 'next/image';
import apple from '/public/Logo - SIWA - Logo-only - White@3x.png';
import google from '/public/google.svg';
import kakao from '/public/kakao.svg';

export const SocialLogin = () => {
  const LinkStyle = 'cursor-pointer w-8 rounded-full drop-shadow-lg';
  return (
    <div className="flex justify-center gap-8 items-center mb-8">
      <>
        <Link
          className={`${LinkStyle} border-[0.5px] border-custom-gray-100`}
          href="https://www.google.com"
        >
          <Image className="p-[4px] " src={google} alt="Google" />
        </Link>
      </>
      <>
        <Link className={LinkStyle} href="https://www.kakaocorp.com">
          <Image src={kakao} alt="Kakao" />
        </Link>
      </>
      <>
        <Link
          className={`${LinkStyle} overflow-hidden`}
          href="https://www.apple.com"
        >
          <Image
            className="scale-[1.3] translate-y-[0.9px]"
            src={apple}
            alt="Apple"
          />
        </Link>
      </>
    </div>
  );
};
