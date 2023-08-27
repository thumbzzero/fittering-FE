import { customFetch, serverFetch } from '@/utils/customFetch';

export type ProductPreview = {
  productId: number;
  productImage: string;
  productName: string;
  price: number;
  mallName: string;
  mallUrl: string;
};

export type ProductPreviewResponse = {
  content: ProductPreview[];
};

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
  url: string
): Promise<ProductPreview[]> {
  const response = await serverFetch(url);
  if (!response.ok) {
    return [];
  }
  return await response.json();
}

export async function getProductPreviewPagingWithoutToken(
  url: string
): Promise<ProductPreview[]> {
  const response = await serverFetch(url);
  if (!response.ok) {
    return [];
  }
  const data: ProductPreviewResponse = await response.json();
  return data.content;
}
