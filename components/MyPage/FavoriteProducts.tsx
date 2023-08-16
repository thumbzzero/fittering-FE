'use client';

import MyPageSection from '@/components/MyPage/MyPageSection';
import { useState, useEffect } from 'react';
import { getProductPreview, ProductPreview } from '@/service/product';
import ProductsGrid from '../Products/ProductsGrid';

export default function FavoriteProducts() {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductPreview('/user/favorite_goods/preview');
      setProducts(data);
    }
    fetchProducts();
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 640);
  }, []);
  return (
    <>
      <MyPageSection sectionName="좋아요한 상품" displayStyle="" />
      <ProductsGrid products={isMobile ? products.slice(2) : products} />
    </>
  );
}
