import GlobalFilter from '@/components/GlobalFilter';
import GlobalMenu from '@/components/GlobalMenu';
import { getProductPreviewPagingWithoutToken } from '@/service/product';
import { CategoryProductsData } from '@/types/categoryProducts';
import React from 'react';
import { outer, top, dress, bottom } from '@/types/categories';
import { FILTER_ID } from '@/constants/filterId';
import CategoryProducts from '@/components/Products/CategoryProducts';

type Props = {
  params: {
    categoryName?: string[];
  };
};

export const revalidate = 3600 * 24 * 14;

const categories = [outer, top, dress, bottom];

const mainCategoryId = [0, ...categories.map((category) => category.index)];
const subCategoryId = categories
  .map((category) => category.sub.map((sub) => sub.index))
  .flat();
const genders: ('A' | 'M' | 'F')[] = ['A', 'M', 'F'];
const filterIds = FILTER_ID.map((filter) => filter.id);

async function fetchCategoriesProducts(
  categoryType: 'main' | 'sub',
  categoryId: number,
  gender: string,
  filterId: number
) {
  if (categoryType === 'main') {
    return await getProductPreviewPagingWithoutToken(
      `/categories/${categoryId}/${gender}/${filterId}`
    );
  }
  return await getProductPreviewPagingWithoutToken(
    `/categories/sub/${categoryId}/${gender}/${filterId}`
  );
}

async function getCategoriesProductsData(categoryType: 'main' | 'sub') {
  const categoryIds = categoryType === 'main' ? mainCategoryId : subCategoryId;
  let data: CategoryProductsData[] = [];

  for (const categoryId of categoryIds) {
    for (const gender of genders) {
      for (const filterId of filterIds) {
        data.push({
          categoryId: categoryId,
          gender: gender,
          filterId: filterId,
          contents: await fetchCategoriesProducts(
            categoryType,
            categoryId,
            gender,
            filterId
          ),
        });
      }
    }
  }

  return data;
}

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
