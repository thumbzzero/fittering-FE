import { Product, ProductPreview, ProductPreviewResponse } from '@/types/product';
import { customFetch, fetchWithoutToken } from '@/utils/customFetch';

export async function getProductPreview(
  url: string
): Promise<ProductPreview[]> {
  const response = await customFetch(url);
  if (!response.ok) {
    return [];
  }
  return await response.json();
}

export async function getProductPreviewPaging(
  url: string
): Promise<ProductPreview[]> {
  const response = await customFetch(url);
  if (!response.ok) {
    return [];
  }
  const data: ProductPreviewResponse = await response.json();
  return data.content;
}

export async function getProductPreviewWithoutToken(
  url: string,
  options?: RequestInit
): Promise<ProductPreview[]> {
  const response = await fetchWithoutToken(url, options);
  if (!response.ok) {
    return [];
  }
  return await response.json();
}

export async function getProductPreviewPagingWithoutToken(
  url: string,
  options?: RequestInit
): Promise<ProductPreview[]> {
  const response = await fetchWithoutToken(url, options);
  if (!response.ok) {
    return [];
  }
  const data: ProductPreviewResponse = await response.json();
  return data.content;
}

export async function getProduct(productId: number): Promise<Product> {
  const response = await customFetch(`/products/${productId}`);
  if (!response.ok) {
    return {} as Product;
  }
  return await response.json();
}

export async function addFavorites(productId: number): Promise<Response> {
  const response = await customFetch(`/users/favorite_goods/${productId}`, {
    method: 'POST',
  });
  return response;
}

export async function deleteFavorites(productId: number): Promise<Response> {
  const response = await customFetch(`/users/favorite_goods/${productId}`, {
    method: 'DELETE',
  });
  return response;
}
