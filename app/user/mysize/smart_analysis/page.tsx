import MobileSection from '@/components/MobileSection';
import Guideline from '@/components/MyPage/MySize/Guideline';
import SmartAnalysisPhotoSubmitForm from '@/components/MyPage/MySize/SmartAnalysisPhotoSubmitForm';
import React from 'react';
import MyPageSection from '../../../../components/MyPage/MyPageSection';
import Section from '../../../../components/Section';

type Props = {};

function SmartAnalysisPage(props: Props) {
  return (
    <>
      <MyPageSection
        sectionName="내 맞춤 정보 설정"
        displayStyle="hidden md:block"
      />
      <MobileSection sectionName="내 맞춤 정보 설정" />
      <Section sectionName="스마트 분석" />
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <SmartAnalysisPhotoSubmitForm photoType="FRONT" />
        <SmartAnalysisPhotoSubmitForm photoType="SIDE" />
      </div>
      <Guideline />
    </>
  );
}

export default SmartAnalysisPage;
