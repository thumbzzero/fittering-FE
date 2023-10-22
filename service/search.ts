import { serverFetch } from '@/utils/customFetch';

export type Products = {
  id: number;
  name: string;
  image: string;
};

export type Malls = {
  id: number;
  name: string;
  image: string;
};

export type Keywords = {
  products: Products[];
  malls: Malls[];
};

export async function getSearchKeywords(keyword: string): Promise<Keywords> {
  const response = await serverFetch(`/search/${keyword}`);
  if (!response.ok) {
    return { products: [], malls: [] };
  }
  return await response.json();
}
