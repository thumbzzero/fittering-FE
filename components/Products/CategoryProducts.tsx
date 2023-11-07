'use client';

import { categoryNameToIndex } from '@/utils/categoryNameToIndex';
import { useState, useEffect } from 'react';
import FilterIdDropdown from '../FilterIdDropdown';
import ProductsGrid from './ProductsGrid';
import { useSearchParams } from 'next/navigation';
import { ProductPreview } from '@/service/product';
import {
  fetchCategoriesProducts,
  fetchMallCategoriesProducts,
} from '@/service/categoriesProducts';

type Props = {
  categoryName?: string[];
  mallId?: Promise<number>;
};

export default function CategoryProducts({ categoryName, mallId }: Props) {
  const searchParams = useSearchParams();

  let mallCategoryName: string[] = [];
  if (searchParams.get('category'))
    mallCategoryName.push(searchParams.get('category')!);
  if (searchParams.get('subCategory'))
    mallCategoryName.push(searchParams.get('subCategory')!);

  const [products, setProducts] = useState<ProductPreview[]>([]);

  const categoryType =
    (categoryName ?? mallCategoryName).length < 2 ? 'main' : 'sub';
  const categoryId = categoryNameToIndex(categoryName ?? mallCategoryName);
  const gender = localStorage.getItem('GLOBAL_FILTER') ?? 'A';
  const [filterId, setFilterId] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      if (mallId) {
        setProducts(
          await fetchMallCategoriesProducts(
            await mallId,
            categoryType,
            categoryId,
            gender,
            filterId,
            page
          )
        );
      } else {
        setProducts(
          await fetchCategoriesProducts(
            categoryType,
            categoryId,
            gender,
            filterId,
            page
          )
        );
      }
    }
    fetchProduct();
  }, [categoryType, categoryId, gender, mallId, filterId, page]);

  if (products.length === 0) {
    return (
      <div className="mt-8 text-center text-custom-gray-800">
        아직 등록된 상품이 없습니다.
      </div>
    );
  }

  return (
    <>
      <FilterIdDropdown setFilterId={setFilterId} />
      <ProductsGrid products={products} />
    </>
  );
}
