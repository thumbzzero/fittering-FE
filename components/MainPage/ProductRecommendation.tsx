'use client';

import Section from '@/components/Section';
import { getProductPreview, ProductPreview } from '@/service/product';
import { useEffect, useState } from 'react';
import ProductSlider from '@/components/Products/ProductSlider';
import ProductsGrid from '@/components/Products/ProductsGrid';
import ProductNotFound from '@/components//Products/ProductNotFound';

type Props = {
  recommendationType: 1 | 2;
};

export default function ProductRecommendation({ recommendationType }: Props) {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const sectionName =
    recommendationType === 1
      ? '열졍콩님을 위한 추천 상품'
      : '열졍콩님과 비슷한 체형의 고객의 pick';

  useEffect(() => {
    const blankOrPick = recommendationType === 2 ? '/pick' : '';
    async function fetchProduct() {
      const data = await getProductPreview(
        `/users/recommendation${blankOrPick}/preview`
      );
      setProducts(data);
    }
    fetchProduct();
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640)
  }, [recommendationType]);

  return (
    <>
      {recommendationType === 2 && products.length === 0 ? (
        <ProductNotFound sectionName={sectionName} />
      ) : (
        <>
          <Section sectionName={sectionName} />
          {isMobile ? (
            <ProductSlider products={products} />
          ) : (
            <ProductsGrid products={products} />
          )}
        </>
      )}
    </>
  );
}
