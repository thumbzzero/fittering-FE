'use client';

import { ProductPreview } from '@/types/product';
import ProductsGrid from '../Products/ProductsGrid';

type Props = {
  allProducts: ProductPreview[];
  maleProducts: ProductPreview[];
  femaleProducts: ProductPreview[];
};

function setProducts(
  gender: string,
  { allProducts, maleProducts, femaleProducts }: Props
) {
  if (gender === 'M') return maleProducts;
  if (gender === 'F') return femaleProducts;
  return allProducts;
}

export default function RankFilter({
  allProducts,
  maleProducts,
  femaleProducts,
}: Props) {
  const gender = localStorage.getItem('GLOBAL_FILTER') ?? 'A';
  const products = setProducts(gender, {
    allProducts,
    maleProducts,
    femaleProducts,
  });

  return <ProductsGrid products={products} isRank={true} />;
}
