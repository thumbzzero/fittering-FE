import { customFetch } from '@/utils/customFetch';

export type MallRankingPreview = {
  id: number;
  name: string;
  image: string;
};

export type MallPreview = {
  id: number;
  name: string;
  image: string;
  description: string;
  view: number;
  products: {
    productId: number;
    productImage: string;
  }[];
};

export type Mall = {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
};

export async function getRankedMallPreview(): Promise<MallRankingPreview[]> {
  const response = await customFetch('/malls/rank/preview');
  if (!response.ok) {
    return [];
  }
  return response.json();
}
