'use client';

import React, { useEffect, useState } from 'react';
import ProductsGrid from '@/components/Products/ProductsGrid';
import FilterIdDropdown from '@/components/FilterIdDropdown';
import { getProductPreviewPaging } from '@/service/product';
import { ProductPreview } from '@/types/product';

type Props = {
  keyword: string | undefined;
};

export default function SearchResult({ keyword }: Props) {
  const [products, setProducts] = useState<ProductPreview[]>([]);

  const [filterId, setFilterId] = useState(0);
  const gender = localStorage.getItem('GLOBAL_FILTER');
  const url = `/search/${keyword}/${gender}/${filterId}`;

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProductPreviewPaging(url);
      setProducts(data);
    }
    fetchProducts();
  }, [url]);

  return (
    <>
      <FilterIdDropdown setFilterId={setFilterId} />
      {products.length !== 0 ? (
        <ProductsGrid products={products} />
      ) : (
        <p className="mt-12 text-xs sm:text-sm text-center text-custom-gray-800">{`'${keyword}'에 대한 검색 결과가 없습니다.`}</p>
      )}
    </>
  );
}
