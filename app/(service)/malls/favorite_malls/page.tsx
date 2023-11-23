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
      <MallsList previewType='favorite_malls' />
    </div>
  );
}

export default FavoriteMallPage;
