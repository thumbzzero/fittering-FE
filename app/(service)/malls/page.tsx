import MallPreviewFilter from '@/components/Malls/MallPreviewFilter';
import MallsList from '@/components/Malls/MallsList';
import React from 'react';

type Props = {};

function MallsPage(props: Props) {
  return (
    <div>
      <MallPreviewFilter isRanking={true} />
      <MallsList isRanking={true} />
    </div>
  );
}

export default MallsPage;
