'use client';

import LineSection from '@/components/LineSection';
import {
  getProductPreview,
  getProductPreviewPaging,
} from '@/service/product';
import { useState, useEffect } from 'react';
import ProductSlider from '@/components/Products/ProductSlider';
import RecentProductGrid from '@/components/Products/RecentProductGrid';
import ProductsGrid from '@/components/Products/ProductsGrid';
import { ProductPreview } from '@/types/product';

type Props = {
  isPreview: boolean;
};

export default function RecentProducts({ isPreview }: Props) {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      if (isPreview) {
        const data = await getProductPreview('/users/recent/preview');
        setProducts(data);
      } else {
        const data = await getProductPreviewPaging('/users/recent');
        setProducts(data);
      }
    }
    fetchProducts();
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640);
  }, [isPreview]);

  if (products.length === 0) {
    return (
      <>
        {isPreview ? (
          <LineSection sectionName="최근 본 상품" displayStyle="" />
        ) : null}
        <div className="mt-8 text-center text-custom-gray-800">
          최근 본 상품이 존재하지 않습니다.
        </div>
      </>
    );
  }

  if (!isPreview) {
    return <ProductsGrid products={products} />;
  }

  return (
    <>
      {isPreview ? (
        <LineSection sectionName="최근 본 상품" displayStyle="" />
      ) : null}
      {isMobile && isPreview ? (
        <ProductSlider products={products} />
      ) : (
        <RecentProductGrid products={products} />
      )}
    </>
  );
}
