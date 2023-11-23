import { BottomSize, DressSize, TopSize } from '@/types/sizes';

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
  subCategory: string;
  view: number;
  popularGender: string;
  popularAgeRange: number;
  isFavorite: boolean;
  sizes: TopSize[] | BottomSize[] | DressSize[];
  descriptions: { url: string }[];
  popularAgeRangePercents: number[];
  popularGenderPercents: number[];
};