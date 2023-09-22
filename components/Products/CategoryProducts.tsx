'use client';

import { categoryNameToIndex } from '@/utils/categoryNameToIndex';
import { useState } from 'react';
import FilterIdDropdown from '../FilterIdDropdown';
import ProductsGrid from './ProductsGrid';
import { CategoryProductsData } from '@/types/categoryProducts';
import { useSearchParams } from 'next/navigation';

type Props = {
  categoryName?: string[];
  mainCategoriesProducts: CategoryProductsData[];
  subCategoriesProducts: CategoryProductsData[];
};

function setProducts(
  categoryName: string[],
  mainCategoriesProducts: CategoryProductsData[],
  subCategoriesProducts: CategoryProductsData[],
  gender: string,
  filterId: number
) {
  if (categoryName.length === 0)
    return mainCategoriesProducts.filter(
      (products) =>
        products.categoryId === 0 &&
        products.gender === gender &&
        products.filterId === filterId
    )[0].contents;

  if (categoryName.length === 1)
    return mainCategoriesProducts.filter(
      (products) =>
        products.categoryId === categoryNameToIndex(categoryName) &&
        products.gender === gender &&
        products.filterId === filterId
    )[0].contents;

  return subCategoriesProducts.filter(
    (products) =>
      products.categoryId === categoryNameToIndex(categoryName) &&
      products.gender === gender &&
      products.filterId === filterId
  )[0].contents;
}

export default function CategoryProducts({
  categoryName,
  mainCategoriesProducts,
  subCategoriesProducts,
}: Props) {
  const searchParams = useSearchParams();
  const mallMainCategory = searchParams.get('category');
  const mallSubCategory = searchParams.get('subCategory');
  let mallCategoryName: string[] = [];
  if (mallMainCategory) mallCategoryName.push(mallMainCategory);
  if (mallSubCategory) mallCategoryName.push(mallSubCategory);

  const categoryNameParam = categoryName ?? mallCategoryName;
  const gender = localStorage.getItem('GLOBAL_FILTER') ?? 'A';
  const [filterId, setFilterId] = useState(0);
  const products = setProducts(
    categoryNameParam,
    mainCategoriesProducts,
    subCategoriesProducts,
    gender,
    filterId
  );

  return (
    <>
      <FilterIdDropdown setFilterId={setFilterId} />
      <ProductsGrid products={products} />
    </>
  );
}
