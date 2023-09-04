import MallPreviewFilter from '@/components/Malls/MallPreviewFilter';
import React from 'react';

type Props = {};

function MallsPage(props: Props) {
  return (
    <div>
      <MallPreviewFilter isRanking={true} />
    </div>
  );
}

export default MallsPage;
