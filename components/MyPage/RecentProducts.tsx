'use client';

import MyPageSection from '@/components/MyPage/MyPageSection';
import { useState } from 'react';

export default function RecentProducts() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <MyPageSection sectionName="최근 본 상품" displayStyle="" />
    </>
  );
}
