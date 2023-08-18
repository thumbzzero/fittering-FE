'use client';

import FavoriteProducts from '@/components/FavoriteProducts';
import Section from '@/components/Section';
import React from 'react';

type Props = {};

function FavoriteGoodsPage(props: Props) {
  return (
    <div>
      <Section sectionName="좋아요한 상품" />
      <FavoriteProducts isPreview={false} />
    </div>
  );
}

export default FavoriteGoodsPage;
