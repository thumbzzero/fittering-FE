'use client';

import LineSection from '@/components/LineSection';
import { useState, useEffect } from 'react';
import {
  getProductPreview,
  getProductPreviewPaging,
} from '@/service/product';
import ProductsGrid from '@/components/Products/ProductsGrid';
import { ProductPreview } from '@/types/product';

type Props = {
  isPreview: boolean;
};

export default function FavoriteProducts({ isPreview }: Props) {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      if (isPreview) {
        const data = await getProductPreview('/users/favorite_goods/preview');
        setProducts(data);
      } else {
        const data = await getProductPreviewPaging('/users/favorite_goods');
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
          <LineSection sectionName="좋아요한 상품" displayStyle="" />
        ) : null}
        <div className="mt-8 text-center text-custom-gray-800">
          좋아요한 상품이 없습니다.
        </div>
      </>
    );
  }

  return (
    <>
      {isPreview ? (
        <LineSection sectionName="좋아요한 상품" displayStyle="" />
      ) : null}
      <ProductsGrid
        products={isPreview && isMobile ? products.slice(2) : products}
      />
    </>
  );
}
