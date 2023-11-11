import LinkToMallsList from '@/components/Malls/LinkToMallsList';
import MallPreviewFilter from '@/components/Malls/MallPreviewFilter';
import MallsList from '@/components/Malls/MallsList';
import React from 'react';

type Props = {};

function FavoriteMallPage(props: Props) {
  return (
    <div>
      <MallPreviewFilter isRanking={false} />
      <LinkToMallsList />
      <MallsList isRanking={false} />
    </div>
  );
}

export default FavoriteMallPage;
