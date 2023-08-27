import { ProductPreview } from '@/service/product';

export type CategoryProductsData = {
  categoryId: number;
  gender: 'A' | 'M' | 'F';
  filterId: number;
  contents: ProductPreview[]
}