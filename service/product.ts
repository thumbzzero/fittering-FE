import { customFetch } from '@/utils/customFetch';

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
  const data: ProductPreviewResponse = await response.json();
  return data.content;
}
