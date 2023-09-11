import { BottomSize, DressSize, TopSize } from '@/types/sizes';
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

export type Product = {
  favoriteCount: number;
  productImage: string;
  productName: string;
  productGender: string;
  price: number;
  mallName: string;
  mallUrl: string;
  mallImage: string;
  origin: string;
  category: string;
  view: number;
  popularGender: string;
  popularAgeRange: number;
  sizes: TopSize[] | BottomSize[] | DressSize[];
  isFavorite: boolean;
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

export async function getProduct(productId: number): Promise<Product> {
  const response = await customFetch(`/products/${productId}`);
  if (!response.ok) {
    return {} as Product;
  }
  return await response.json();
}
