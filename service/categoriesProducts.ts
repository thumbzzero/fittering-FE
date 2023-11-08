import { getProductPreviewPagingWithoutToken } from '@/service/product';

export async function fetchCategoriesProducts(
  categoryType: 'main' | 'sub',
  categoryId: number,
  gender: string,
  filterId: number,
  page: number
) {
  return await getProductPreviewPagingWithoutToken(
    `/categories${
      categoryType === 'sub' ? '/sub' : ''
    }/${categoryId}/${gender}/${filterId}?page=${page}`
  );
}

export async function fetchMallCategoriesProducts(
  mallId: number,
  categoryType: 'main' | 'sub',
  categoryId: number,
  gender: string,
  filterId: number,
  page: number
) {
  return await getProductPreviewPagingWithoutToken(
    `/malls${
      categoryType === 'sub' ? '/sub' : ''
    }/${mallId}/${categoryId}/${gender}/${filterId}?page=${page}`
  );
}
