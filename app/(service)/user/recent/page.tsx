import Section from '@/components/Section';
import React from 'react';
import RecentProducts from '@/components/MyPage/RecentProducts';

type Props = {};

function RecentProductPage(props: Props) {
  return (
    <div>
      <Section sectionName="최근 본 상품" />
      <RecentProducts isPreview={false} />
    </div>
  );
}

export default RecentProductPage;
