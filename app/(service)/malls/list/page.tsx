import { getMallsPreviewList } from '@/service/malls';
import React from 'react';
import MallPreviewCard from '@/components/Malls/MallPreviewCard';
import Section from '@/components/Section';

type Props = {};

async function MallsListPage(props: Props) {
  const mallsList = await getMallsPreviewList();
  
  return (
    <div>
      <Section sectionName="쇼핑몰 전체 보기" />
      <div className="my-4" aria-hidden={true}></div>
      <MallPreviewCard malls={mallsList} />
    </div>
  );
}

export default MallsListPage;
