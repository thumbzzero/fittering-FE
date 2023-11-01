'use client';

import GlobalMenu from '@/components/GlobalMenu';
import MobileSection from '@/components/MobileSection';
import RecentProducts from '@/components/MyPage/RecentProducts';
import DetailInfo from '@/components/ProductDetail/DetailInfo';
import ProductSummary from '@/components/ProductDetail/ProductSummary';
import SizeInfo from '@/components/ProductDetail/SizeInfo';
import Section from '@/components/Section';
import { getProduct, Product } from '@/service/product';
import React, { useEffect, useState } from 'react';

type Props = {
  params: {
    productId: string;
  };
};

function ProductPage({ params: { productId } }: Props) {
  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    async function fetchProduct() {
      const data = await getProduct(parseInt(productId));
      setProduct(data);
    }
    fetchProduct();
  }, [productId]);

  return (
    <div className='mb-8 md:mb-20'>
      <div className="hidden md:block">
        <Section sectionName={product.productName} />
      </div>
      <MobileSection sectionName={product.productName} />
      <ProductSummary product={product} />
      <SizeInfo category={product.category} sizes={product.sizes} />
      <DetailInfo descriptions={product.descriptions} />
      <RecentProducts isPreview={true} />
      <GlobalMenu />
    </div>
  );
}

export default ProductPage;
