'use client';

import Section from '@/components/Section';
import { getProductPreview, ProductPreview } from '@/service/product';
import { useEffect, useState } from 'react';
import ProductSlider from '@/components/Products/ProductSlider';
import ProductsGrid from '@/components/Products/ProductsGrid';
import ProductNotFound from '@/components//Products/ProductNotFound';
import { useAppSelector } from '@/store/hooks';
import { MyPage } from '@/types/user';
import AllLink from './AllLink';

type Props = {
  recommendationType: 1 | 2;
};

export default function ProductRecommendation({ recommendationType }: Props) {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const myPage: MyPage = useAppSelector((state) => state.myPage);

  const sectionName =
    recommendationType === 1
      ? `${myPage.username}님을 위한 추천 상품`
      : `${myPage.username}님과 비슷한 체형의 고객의 pick`;

  useEffect(() => {
    const blankOrPick = recommendationType === 2 ? '/pick' : '';
    async function fetchProduct() {
      const data = await getProductPreview(
        `/users/recommendation${blankOrPick}/preview`
      );
      setProducts(data);
    }
    fetchProduct();
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640);
  }, [recommendationType]);

  return (
    <>
      {recommendationType === 2 && products.length === 0 ? (
        <ProductNotFound sectionName={sectionName} />
      ) : (
        <>
          <Section sectionName={sectionName}>
            <AllLink
              href={`/user/recommendation?type=${recommendationType}`}
            />
          </Section>
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
