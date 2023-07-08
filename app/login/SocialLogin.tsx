import Link from 'next/link';
import Image from 'next/image';
import apple from '/public/apple.svg';
import google from '/public/google.svg';
import kakao from '/public/kakao.svg';

export const SocialLogin = () => {
  return (
    <div className="flex justify-center gap-8 items-center mb-8">
      <>
        <Link className="cursor-pointer w-8" href="https://www.google.com">
          <Image src={google} alt="Google" />
        </Link>
      </>
      <>
        <Link className="cursor-pointer w-8" href="https://www.kakaocorp.com">
          <Image src={kakao} alt="Kakao" />
        </Link>
      </>
      <>
        <Link className="cursor-pointer w-8" href="https://www.apple.com">
          <Image src={apple} alt="Apple" />
        </Link>
      </>
    </div>
  );
};
