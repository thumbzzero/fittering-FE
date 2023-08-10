import React from 'react';
import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';

type Props = {};

function MallPage(props: Props) {
  return (
    <div>
      쇼핑몰 상세 조회
      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default MallPage;
