import MallPreviewFilter from '@/components/Malls/MallPreviewFilter';
import React from 'react';

type Props = {};

function FavoriteMallPage(props: Props) {
  return (
    <div>
      <MallPreviewFilter isRanking={false} />
    </div>
  );
}

export default FavoriteMallPage;
