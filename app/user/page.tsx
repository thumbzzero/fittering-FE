import Link from 'next/link';
import React from 'react';
import MyPageCommon from './MyPageCommon';
import MyPageSection from './MyPageSection';

type Props = {};

function MyPage(props: Props) {
  return (
    <>
      <MyPageCommon />
      <MyPageSection sectionName="최근 본 상품" />
      <MyPageSection sectionName="좋아요한 상품" />
      <div className="pt-6 mx-4 md:mx-10 lg:mx-48 border-t border-nav-black text-center md:text-right">
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
