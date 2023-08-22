'use client';

import React, { useEffect, useState } from 'react';
import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import { useSearchParams } from 'next/navigation';
import { ProductPreview, getProductPreviewPaging } from '@/service/product';
import ProductsGrid from '@/components/Products/ProductsGrid';

type Props = {};

function SearchPage(props: Props) {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');

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
    <div>
      <h1 className="text-sm sm:text-lg font-semibold mt-8 mb-2">
        <span className="text-base sm:text-xl text-main-color">{`'${keyword}'`}</span>
        에 대한 검색 결과
      </h1>
      {products.length !== 0 ? (
        <ProductsGrid products={products} />
      ) : (
        <p className="mt-12 text-xs sm:text-sm text-center text-custom-gray-800">{`'${keyword}'에 대한 검색 결과가 없습니다.`}</p>
      )}

      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default SearchPage;
