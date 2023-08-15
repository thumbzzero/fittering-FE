'use client';

import Section from '@/components/Section';
import { getProductPreview, ProductPreview } from '@/service/product';
import { useEffect, useState } from 'react';
import ProductSlide from '@/components/Products/ProductSlide';
import ProductsGrid from '@/components/Products/ProductsGrid';
import ProductNotFound from '@/components//Products/ProductNotFound';

type Props = {
  recommendationType: 1 | 2;
};

export default function ProductRecommendation({ recommendationType }: Props) {
  const [products, setProducts] = useState<ProductPreview[]>([]);

  const sectionName =
    recommendationType === 1
      ? '열졍콩님을 위한 추천 상품'
      : '열졍콩님과 비슷한 체형의 고객의 pick';

  useEffect(() => {
    const blankOrPick = recommendationType === 2 ? '/pick' : '';
    async function fetchProduct() {
      const data = await getProductPreview(
        `/user/recommendation${blankOrPick}/preview`
      );
      setProducts(data);
    }
    fetchProduct();
  }, [recommendationType]);

  return (
    <>
      {recommendationType === 2 && products.length === 0 ? (
        <ProductNotFound sectionName={sectionName} />
      ) : (
        <>
          <Section sectionName={sectionName} />
          {typeof window !== 'undefined' && window.innerWidth < 640 ? (
            <ProductSlide products={products} />
          ) : (
            <ProductsGrid products={products} />
          )}
        </>
      )}
    </>
  );
}
