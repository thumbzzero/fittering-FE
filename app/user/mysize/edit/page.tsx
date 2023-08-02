import MobileSection from '@/components/MobileSection';
import MyPageSection from '@/components/MyPage/MyPageSection';
import EditForm from '@/components/MyPage/MySize/EditForm';
import GuidelinePic from '@/components/MyPage/MySize/GuidelinePic';
import { getMySize } from '@/service/mysize';

import React from 'react';

type Props = {};

async function MySizeEditPage(props: Props) {
  const mySize = await getMySize();
  return (
    <>
      <MyPageSection
        sectionName="내 맞춤 정보 설정"
        displayStyle="hidden md:block"
      />
      <MobileSection sectionName="내 맞춤 정보 설정" />
      <div className="flex flex-col gap-8 md:gap-12 w-full md:flex-row md:portrait:flex-col">
        <GuidelinePic />
        <EditForm mySize={mySize} />
      </div>
    </>
  );
}

export default MySizeEditPage;
