import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import React from 'react';
import CategoryProducts from '@/components/Products/CategoryProducts';
import { getCategoriesProductsData } from '@/service/categoriesProducts';

type Props = {
  params: {
    categoryName?: string[];
  };
};

export const revalidate = 1209600; // 3600 * 24 * 14

async function CategoryPage({ params: { categoryName } }: Props) {
  const mainCategoriesProducts = await getCategoriesProductsData('main');
  const subCategoriesProducts = await getCategoriesProductsData('sub');

  return (
    <div>
      <CategoryProducts
        categoryName={categoryName === undefined ? [] : categoryName}
        mainCategoriesProducts={mainCategoriesProducts}
        subCategoriesProducts={subCategoriesProducts}
      />
      <GlobalFilter />
      <GlobalMenu />
    </div>
  );
}

export default CategoryPage;
