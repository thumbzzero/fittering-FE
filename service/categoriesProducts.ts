import { outer, top, dress, bottom } from '@/types/categories';
import { FILTER_ID } from '@/constants/filterId';
import { getProductPreviewPagingWithoutToken } from '@/service/product';
import { CategoryProductsData } from '@/types/categoryProducts';

export const categories = [outer, top, dress, bottom];
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
  filterId: number,
  mallId?: number
) {
  const apiUrl = mallId
    ? `/malls${categoryType === 'sub' ? '/sub' : ''}/${mallId}`
    : `/categories${categoryType === 'sub' ? '/sub' : ''}`;
  
  return await getProductPreviewPagingWithoutToken(
    `${apiUrl}/${categoryId}/${gender}/${filterId}`
  );
}

export async function getCategoriesProductsData(
  categoryType: 'main' | 'sub',
  mallId?: number
) {
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
            filterId,
            mallId
          ),
        });
      }
    }
  }

  return data;
}
