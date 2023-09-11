'use client';

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

  return <div></div>;
}

export default ProductPage;
