'use client';

import MyPageSection from '@/components/MyPage/MyPageSection';
import { getProductPreview, ProductPreview } from '@/service/product';
import { useState, useEffect } from 'react';
import ProductSlider from '../Products/ProductSlider';
import RecentProductGrid from '../Products/RecentProductGrid';

export default function RecentProducts() {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductPreview('/users/recent/preview');
      setProducts(data);
    }
    fetchProducts();
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640);
  }, []);

  if (products.length === 0) {
    return (
      <>
        <MyPageSection sectionName="최근 본 상품" displayStyle="" />
        <div className="mt-8 text-center text-custom-gray-800">
          최근 본 상품이 존재하지 않습니다.
        </div>
      </>
    );
  }

  return (
    <>
      <MyPageSection sectionName="최근 본 상품" displayStyle="" />
      {isMobile ? (
        <ProductSlider products={products} />
      ) : (
        <RecentProductGrid products={products} />
      )}
    </>
  );
}
