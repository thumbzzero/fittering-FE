'use client';

import MyPageSection from '@/components/MyPage/MyPageSection';
import { useState, useEffect } from 'react';
import {
  getProductPreview,
  getProductPreviewPaging,
  ProductPreview,
} from '@/service/product';
import ProductsGrid from './Products/ProductsGrid';

type Props = {
  isPreview: boolean;
};

export default function FavoriteProducts({ isPreview }: Props) {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      if (isPreview) {
        const data = await getProductPreview('/user/favorite_goods/preview');
        setProducts(data);
      } else {
        const data = await getProductPreviewPaging('/user/favorite_goods');
        setProducts(data);
      }
    }
    fetchProducts();
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640);
  }, []);
  return (
    <>
      {isPreview ? (
        <MyPageSection sectionName="좋아요한 상품" displayStyle="" />
      ) : null}
      <ProductsGrid
        products={isPreview && isMobile ? products.slice(2) : products}
      />
    </>
  );
}
