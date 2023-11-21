'use client';

import FavoriteProducts from '@/components/FavoriteProducts';
import RecentProducts from '@/components/MyPage/RecentProducts';
import { useAppSelector } from '@/store/hooks';
import { MyPage } from '@/types/user';
import Link from 'next/link';
import MyPageCommon from '../../../components/MyPage/MyPageCommon';

type Props = {};
function MyPage(props: Props) {
  const myPage: MyPage = useAppSelector((state) => state.myPage);

  return (
    <>
      <MyPageCommon username={myPage.username ?? '- '} />
      <RecentProducts isPreview={true} />
      <FavoriteProducts isPreview={true} />
      <div className="mt-8 pt-6 border-t-[1.5px] border-nav-black text-center md:text-right">
        <Link
          className="md:text-right text-custom-gray-800 font-bold underline decoration-custom-gray-800"
          href="/user/delete"
          aria-label='회원 탈퇴 페이지로 이동'
        >
          회원 탈퇴하기
        </Link>
      </div>
    </>
  );
}

export default MyPage;
