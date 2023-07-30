import MySizeInfo from '@/components/MyPage/MySize/MySizeInfo';
import React from 'react';
import MyPageSection from '../../../components/MyPage/MyPageSection';
import GuidelinePic from '../../../components/MyPage/MySize/GuidelinePic';

type Props = {};

function MySizePage(props: Props) {
  return (
    <>
      <MyPageSection sectionName="내 맞춤 정보 설정" />
      <div className="flex flex-col gap-8 md:gap-4 w-full md:flex-row">
        <GuidelinePic />
        {/* @ts-expect-error Server Component */}
        <MySizeInfo />
      </div>
    </>
  );
}

export default MySizePage;
