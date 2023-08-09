import Link from 'next/link';
import React from 'react';
import MyPageCommon from '../../../components/MyPage/MyPageCommon';
import MyPageSection from '../../../components/MyPage/MyPageSection';

type Props = {};

function MyPage(props: Props) {
  return (
    <>
      <MyPageCommon />
      <MyPageSection sectionName="최근 본 상품" displayStyle="" />
      <MyPageSection sectionName="좋아요한 상품" displayStyle="" />
      <div className="pt-6 border-t-[1.5px] border-nav-black text-center md:text-right">
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
