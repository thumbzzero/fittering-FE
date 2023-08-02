import MobileSection from '@/components/MobileSection';
import EditButton from '@/components/MyPage/MySize/EditButton';
import MySizeInfo from '@/components/MyPage/MySize/MySizeInfo';
import React from 'react';
import MyPageSection from '../../../components/MyPage/MyPageSection';
import GuidelinePic from '../../../components/MyPage/MySize/GuidelinePic';

type Props = {};

function MySizePage(props: Props) {
  return (
    <>
      <MyPageSection
        sectionName="내 맞춤 정보 설정"
        displayStyle="hidden md:block"
      />
      <MobileSection sectionName="내 맞춤 정보 설정" />
      <div className="flex flex-col gap-8 md:gap-12 w-full md:flex-row md:portrait:flex-col">
        <GuidelinePic />
        {/* @ts-expect-error Server Component */}
        <MySizeInfo />
      </div>
      <EditButton />
    </>
  );
}

export default MySizePage;
