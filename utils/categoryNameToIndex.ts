import { bottom, dress, outer, top } from '@/types/categories';

const categories = [outer, top, dress, bottom];

export const categoryNameToIndex = (categoryName: string[]) => {
  if (categoryName.length === 0) return 0;
  const mainCategory = categories.filter(
    (category) => category.url === `/categories/${categoryName[0]}`
  )[0];
  if (categoryName.length === 1) return mainCategory.index;
  return mainCategory.sub.filter(
    (subCategory) =>
      subCategory.url === `${mainCategory.url}/${categoryName[1]}`
  )[0].index;
};
