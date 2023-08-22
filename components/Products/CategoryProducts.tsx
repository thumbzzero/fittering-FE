'use client';

import { getProductPreviewPaging, ProductPreview } from '@/service/product';
import { categoryNameToIndex } from '@/utils/categoryNameToIndex';
import { useState, useEffect } from 'react';
import FilterIdDropdown from '../FilterIdDropdown';
import ProductsGrid from './ProductsGrid';

type Props = {
  categoryName: string[];
};

export default function CategoryProducts({ categoryName }: Props) {
  const [products, setProducts] = useState<ProductPreview[]>([]);
  const [filterId, setFilterId] = useState(0);
  const categoryId =
    categoryName.length === 0 ? 0 : categoryNameToIndex(categoryName);
  const gender = localStorage.getItem('GLOBAL_FILTER');
  const url =
    '/categories' +
    (categoryName.length === 2 ? '/sub' : '') +
    `/${categoryId}/${gender}/${filterId}`;

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
      <ProductsGrid products={products} />
    </>
  );
}
