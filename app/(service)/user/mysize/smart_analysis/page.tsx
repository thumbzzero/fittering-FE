import MobileSection from '@/components/MobileSection';
import Guideline from '@/components/MyPage/MySize/Guideline';
import SmartAnalysisForm from '@/components/MyPage/MySize/SmartAnalysisForm';
import React from 'react';
import LineSection from '@/components/LineSection';
import Section from '@/components/Section';

type Props = {};

function SmartAnalysisPage(props: Props) {
  return (
    <>
      <LineSection
        sectionName="내 맞춤 정보 설정"
        displayStyle="hidden md:block"
      />
      <MobileSection sectionName="내 맞춤 정보 설정" />
      <Section sectionName="스마트 분석" />
      <SmartAnalysisForm />
      <Guideline />
    </>
  );
}

export default SmartAnalysisPage;
