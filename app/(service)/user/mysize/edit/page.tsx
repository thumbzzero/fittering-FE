import MobileSection from '@/components/MobileSection';
import LineSection from '@/components/LineSection';
import EditForm from '@/components/MyPage/MySize/EditForm';
import GuidelinePic from '@/components/MyPage/MySize/GuidelinePic';

import React from 'react';

type Props = {};

async function MySizeEditPage(props: Props) {
  return (
    <>
      <LineSection
        sectionName="내 맞춤 정보 설정"
        displayStyle="hidden md:block md:mb-8"
      />
      <MobileSection sectionName="내 맞춤 정보 설정" />
      <div className="flex flex-col gap-8 md:gap-12 w-full md:flex-row md:portrait:flex-col">
        <GuidelinePic />
        <EditForm />
      </div>
    </>
  );
}

export default MySizeEditPage;
