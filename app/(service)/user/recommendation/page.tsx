'use client';

import Section from '@/components/Section';
import { useAppSelector } from '@/store/hooks';
import { MyPage } from '@/types/user';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getProductPreview } from '@/service/product';
import ProductsGrid from '@/components/Products/ProductsGrid';
import { ProductPreview } from '@/types/product';

type Props = {};

function RecommendationPage(props: Props) {
  const myPage: MyPage = useAppSelector((state) => state.myPage);
  const searchParam = useSearchParams();
  const recommendationType = parseInt(searchParam.get('type') ?? '1');

  const [products, setProducts] = useState<ProductPreview[]>([]);

  const sectionName =
    recommendationType === 1
      ? `${myPage.username}님을 위한 추천 상품`
      : `${myPage.username}님과 비슷한 체형의 고객의 pick`;

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductPreview(
        `/users/recommendation${recommendationType === 2 ? '/pick' : ''}`
      );
      setProducts(data);
    }
    fetchProducts();
  }, [recommendationType]);

  if (products.length === 0) {
    return (
      <div className="mt-8 text-center text-custom-gray-800">
        추천 상품이 없습니다.
      </div>
    );
  }

  return (
    <div>
      <Section sectionName={sectionName} />
      <ProductsGrid products={products} />
    </div>
  );
}

export default RecommendationPage;
