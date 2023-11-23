'use client';

import UserEditLinks from '@/components/MyPage/UserEditLinks';
import MobileLogout from '@/components/MyPage/MobileLogout';
import BackButton from '@/components/BackButton';

type Props = {
  username: string;
};

export default function MyPageCommon({ username }: Props) {
  return (
    <>
      <div
        className={`z-0 bg-bean-head-color h-72 md:h-40 w-[100vw] absolute left-0`}
      ></div>

      <div className="z-10 h-72 md:h-40">
        <div className="relative py-4 text-center md:text-left md:pb-0 md:top-4">
          <BackButton />
          <span className="inline-block md:text-left font-bold md:text-lg">
            My Page
          </span>
        </div>
        <div className="relative top-2 md:top-8">
          <span className="font-bold text-xl md:text-2xl">
            {`${username}님`}, <br className="md:hidden" />
            안녕하세요
          </span>
          <MobileLogout />
        </div>
        <UserEditLinks />
      </div>
    </>
  );
}
