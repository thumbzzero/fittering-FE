import React from 'react';
import Section from '@/components/Section';
import MallsList from '@/components/Malls/MallsList';

type Props = {};

async function MallsListPage(props: Props) {  
  return (
    <div>
      <Section sectionName="쇼핑몰 전체 보기" />
      <div className="my-4" aria-hidden={true}></div>
      <MallsList previewType='preview/list' />
    </div>
  );
}

export default MallsListPage;
