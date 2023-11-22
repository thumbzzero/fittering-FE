import LinkToMallsList from '@/components/Malls/LinkToMallsList';
import MallPreviewFilter from '@/components/Malls/MallPreviewFilter';
import MallsList from '@/components/Malls/MallsList';
import React from 'react';

type Props = {};

function MallsPage(props: Props) {
  return (
    <div>
      <MallPreviewFilter isRanking={true} />
      <LinkToMallsList />
      <MallsList previewType='rank' />
    </div>
  );
}

export default MallsPage;
