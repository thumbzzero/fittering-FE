import FavoriteProducts from '@/components/MyPage/FavoriteProducts';
import RecentProducts from '@/components/MyPage/RecentProducts';
import Link from 'next/link';
import React from 'react';
import MyPageCommon from '../../../components/MyPage/MyPageCommon';

type Props = {};

function MyPage(props: Props) {
  return (
    <>
      <MyPageCommon />
      <RecentProducts />
      <FavoriteProducts />
      <div className="mt-8 pt-6 border-t-[1.5px] border-nav-black text-center md:text-right">
        <Link
          className="md:text-right text-custom-gray-800 font-bold underline decoration-custom-gray-800"
          href="/user/delete"
        >
          회원 탈퇴하기
        </Link>
      </div>
    </>
  );
}

export default MyPage;
